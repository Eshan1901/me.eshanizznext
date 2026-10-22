import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { config } from "../config";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social");
    if (!social) return;

    const cleanups: (() => void)[] = [];

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;
      if (!link) return;

      let rAFId: number | null = null;
      let mouseX = 0;
      let mouseY = 0;
      let currentX = 0;
      let currentY = 0;
      let isHovering = false;

      const animate = () => {
        currentX += (mouseX - currentX) * 0.15;
        currentY += (mouseY - currentY) * 0.15;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        if (isHovering || Math.abs(mouseX - currentX) > 0.1 || Math.abs(mouseY - currentY) > 0.1) {
          rAFId = requestAnimationFrame(animate);
        } else {
          rAFId = null;
        }
      };

      const startAnimation = () => {
        if (!rAFId) {
          rAFId = requestAnimationFrame(animate);
        }
      };

      const onMouseMove = (e: MouseEvent) => {
        const rect = elem.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX = x * 0.4;
        mouseY = y * 0.4;
        startAnimation();
      };

      const onMouseEnter = () => {
        isHovering = true;
        startAnimation();
      };

      const onMouseLeave = () => {
        isHovering = false;
        mouseX = 0;
        mouseY = 0;
        startAnimation();
      };

      elem.addEventListener("mouseenter", onMouseEnter);
      elem.addEventListener("mousemove", onMouseMove, { passive: true });
      elem.addEventListener("mouseleave", onMouseLeave);

      cleanups.push(() => {
        elem.removeEventListener("mouseenter", onMouseEnter);
        elem.removeEventListener("mousemove", onMouseMove);
        elem.removeEventListener("mouseleave", onMouseLeave);
        if (rAFId) cancelAnimationFrame(rAFId);
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href={config.contact.github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href={config.contact.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </span>
        <span>
          <a href={config.contact.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </span>
      </div>
      <a className="resume-button" href="https://drive.google.com/file/d/1Erg6Rkxd6q8JQlq6-AkagWxVmt2d-7NZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
