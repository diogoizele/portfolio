import { useEffect, useState } from "react";

export function useWindow() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    positionX: undefined,
    positionY: undefined,
  });

  function handleResize() {
    setWindowSize(({ positionX, positionY }) => ({
      width: window.innerWidth,
      height: window.innerHeight,
      positionX,
      positionY,
    }));
  }

  function handleChangePosition() {
    setWindowSize(({ width, height }) => ({
      width,
      height,
      positionX: window.scrollX,
      positionY: window.scrollY,
    }));
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleChangePosition);

      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleChangePosition);
      };
    }
  }, []);

  return windowSize;
}
