import { useEffect, useState, useRef } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";
import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const hasFinishedRef = useRef(false);

  useEffect(() => {
    if (percent >= 100 && !hasFinishedRef.current) {
      hasFinishedRef.current = true;
      setLoaded(true);
      const timer1 = setTimeout(() => {
        setIsLoaded(true);
      }, 350);
      return () => clearTimeout(timer1);
    }
  }, [percent]);

  useEffect(() => {
    if (isLoaded) {
      setClicked(true);
      import("./utils/initialFX").then((module) => {
        const timer2 = setTimeout(() => {
          if (module.initialFX) {
            module.initialFX();
          }
          setIsLoading(false);
        }, 400);
        return () => clearTimeout(timer2);
      });
    }
  }, [isLoaded, setIsLoading]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className="loading-header">
        <a href="/#" className="loader-title" data-cursor="disable">
          EshanBhardwaj
        </a>
        <div className={`loaderGame ${clicked ? "loader-out" : ""}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className="loading-screen">
        <div className="loading-marquee">
          <Marquee speed={40}>
            <span>&nbsp; Software Engineer &nbsp;</span> <span>&nbsp; Full Stack Developer &nbsp;</span>
            <span>&nbsp; Software Engineer &nbsp;</span> <span>&nbsp; Full Stack Developer &nbsp;</span>
          </Marquee>
        </div>
        <div
          className={`loading-wrap ${clicked ? "loading-clicked" : ""}`}
          onMouseMove={handleMouseMove}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded ? "loading-complete" : ""}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{Math.min(percent, 100)}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;
  let isDone = false;

  const interval = setInterval(() => {
    if (isDone) return;
    if (percent < 70) {
      percent += Math.floor(Math.random() * 8) + 4;
      setLoading(Math.min(percent, 70));
    } else if (percent < 92) {
      percent += 2;
      setLoading(Math.min(percent, 92));
    }
  }, 40);

  function clear() {
    isDone = true;
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      isDone = true;
      clearInterval(interval);
      let p = percent;
      const finishInterval = setInterval(() => {
        if (p < 100) {
          p += 5;
          setLoading(Math.min(p, 100));
        } else {
          clearInterval(finishInterval);
          setLoading(100);
          resolve(100);
        }
      }, 10);
    });
  }

  return { loaded, percent, clear };
};
