import { useEffect, useRef } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable custom cursor on mobile/touch screens
    if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 768) {
      if (cursorRef.current) cursorRef.current.style.display = "none";
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    let hover = false;
    let animationFrameId: number;
    const mousePos = { x: -100, y: -100 };
    const cursorPos = { x: -100, y: -100 };

    const xSetter = gsap.quickSetter(cursor, "x", "px");
    const ySetter = gsap.quickSetter(cursor, "y", "px");

    const onMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });

    const loop = () => {
      if (!hover) {
        cursorPos.x += (mousePos.x - cursorPos.x) * 0.2;
        cursorPos.y += (mousePos.y - cursorPos.y) * 0.2;
        xSetter(cursorPos.x);
        ySetter(cursorPos.y);
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    const onMouseOver = (e: Event) => {
      const target = (e.currentTarget as HTMLElement);
      const rect = target.getBoundingClientRect();

      if (target.dataset.cursor === "icons") {
        cursor.classList.add("cursor-icons");
        xSetter(rect.left);
        ySetter(rect.top);
        cursor.style.setProperty("--cursorH", `${rect.height}px`);
        hover = true;
      }
      if (target.dataset.cursor === "disable") {
        cursor.classList.add("cursor-disable");
      }
    };

    const onMouseOut = () => {
      cursor.classList.remove("cursor-disable", "cursor-icons");
      hover = false;
    };

    const interactiveElements = document.querySelectorAll("[data-cursor]");
    interactiveElements.forEach((item) => {
      item.addEventListener("mouseover", onMouseOver);
      item.addEventListener("mouseout", onMouseOut);
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach((item) => {
        item.removeEventListener("mouseover", onMouseOver);
        item.removeEventListener("mouseout", onMouseOut);
      });
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;
