import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      const onModelLoaded = async (gltf: GLTF) => {
        try {
          const character = gltf.scene;
          await renderer.compileAsync(character, camera, scene);
          character.traverse((child: any) => {
            if (child.isMesh) {
              const mesh = child as THREE.Mesh;
              child.castShadow = false;
              child.receiveShadow = false;
              mesh.frustumCulled = true;
              if (mesh.material && !Array.isArray(mesh.material)) {
                (mesh.material as THREE.ShaderMaterial).precision = "mediump";
              }
            }
          });
          resolve(gltf);
          setCharTimeline(character, camera);
          setAllTimeline();
          const footR = character.getObjectByName("footR");
          const footL = character.getObjectByName("footL");
          if (footR) footR.position.y = 3.36;
          if (footL) footL.position.y = 3.36;
          dracoLoader.dispose();
        } catch (setupErr) {
          console.error("Error setting up character:", setupErr);
          resolve(gltf);
        }
      };

      // Try loading character.glb directly first for speed, fallback to decrypted enc
      loader.load(
        "/models/character.glb",
        onModelLoaded,
        undefined,
        async () => {
          try {
            const encryptedBlob = await decryptFile(
              "/models/character.enc",
              "Character3D#@"
            );
            const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));
            loader.load(blobUrl, onModelLoaded, undefined, (error) => {
              console.error("Fallback load failed:", error);
              reject(error);
            });
          } catch (err) {
            console.error("Decryption fallback failed:", err);
            reject(err);
          }
        }
      );
    });
  };

  return { loadCharacter };
};

export default setCharacter;
