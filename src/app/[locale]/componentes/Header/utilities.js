import { useState, useRef, useEffect } from "react";

export function useHandleHeaderScroll() {
  const [scrollDirection, setScrollDirection] = useState(null);

  const lastScrollY = useRef(null);
  const lastDirection = useRef(null);

  // Hide on scroll down (stable handler using refs, passive listener)
  useEffect(() => {
    // initialize last positions
    lastScrollY.current =
      typeof window !== "undefined" ? window.pageYOffset : 0;
    lastDirection.current = null;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const delta = scrollY - lastScrollY.current;
      const direction = delta > 0 ? "down" : "up";

      if (Math.abs(delta) > 10 && direction !== lastDirection.current) {
        lastDirection.current = direction;
        setScrollDirection(direction);
      }

      lastScrollY.current = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);
  return scrollDirection;
}

// Custom hook for to toggle dark mode
export function useToggleDarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setDarkMode(true);
      } else if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches
      ) {
        setDarkMode(false);
      }
      setIsFirstRender(false);
      return;
    }

    const root = document.querySelector(":root");
    if (darkMode) {
      root.style.setProperty("--clr-primario", "198 37% 15%");
      root.style.setProperty("--clr-secundario", "198 31% 17%");
      root.style.setProperty("--clr-acentado", "198 44% 22%");
      root.style.setProperty("--clr-acentado-color", "7, 80%, 64%");
      root.style.setProperty("--clr-texto", "0 0% 90%");
      root.style.setProperty("--clr-fondo", "198 25% 10%");
    } else {
      root.style.setProperty("--clr-primario", "175 42% 90%");
      root.style.setProperty("--clr-secundario", "161 40% 90%");
      root.style.setProperty("--clr-acentado", "172 14% 78%");
      root.style.setProperty("--clr-acentado-color", "7, 80%, 40%");
      root.style.setProperty("--clr-texto", "130 5% 24%");
      root.style.setProperty("--clr-fondo", "0 0% 96%");
    }
  }, [darkMode, isFirstRender]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return [darkMode, toggleDarkMode];
}
