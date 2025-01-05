import { useEffect } from "react";

const useViewport = () => {
  useEffect(() => {
    const setViewport = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setViewport();
    window.addEventListener("resize", setViewport);

    return () => window.removeEventListener("resize", setViewport);
  }, []);
};

export default useViewport;
