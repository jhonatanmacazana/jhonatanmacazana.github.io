import { useEffect } from "react";

const useScroll = () => {
  let scrollY = 0;
  let ticking = false;

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(update);
    }
    ticking = true;
  };

  const onScroll = () => {
    scrollY = window.scrollY || window.pageYOffset;
    requestTick();
  };

  const update = () => {
    ticking = false;
    var currentScrollY = scrollY;

    requestAnimationFrame(update);
    document.documentElement.style.setProperty(
      "--scrollY",
      `${currentScrollY}px`
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, false);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return { scrollY };
};

export default useScroll;
