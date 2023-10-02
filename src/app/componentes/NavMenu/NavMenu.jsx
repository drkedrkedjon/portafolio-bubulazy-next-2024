import { useEffect, useState, useId } from "react";
import styles from "./NavMenu.module.css";
import { X as Close } from "react-feather";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { motion } from "framer-motion";
import { HAMBURGER_LINKS } from "@/app/utilities/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavMenu({ toggleMenuOpen }) {
  const [hoveredHamburgerLink, setHoveredHamburgerLink] = useState(null);
  const pathname = usePathname();
  console.log(pathname);
  const id = useId();

  useEffect(() => {
    const elementoEnfocadoAntesAbrirlo = document.activeElement;
    return () => {
      elementoEnfocadoAntesAbrirlo?.focus();
    };
  }, []);

  useEffect(() => {
    function handleEscapeKey(e) {
      if (e.key === "Escape") {
        toggleMenuOpen();
      }
    }
    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [toggleMenuOpen]);

  return (
    <div className={styles.navContainer}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        exit={{ opacity: 0 }}
        className={styles.navFondo}
        onClick={toggleMenuOpen}
      />
      <FocusLock>
        <RemoveScroll>
          <motion.div
            animate={{
              x: "-100%",
            }}
            exit={{
              x: "0%",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 27,
              duration: 0.5,
            }}
            className={styles.navCajon}
          >
            <div className={styles.menuLinks}>
              <ul onMouseLeave={() => setHoveredHamburgerLink(null)}>
                {HAMBURGER_LINKS.map(({ href, slug, label }) => (
                  <li
                    key={slug}
                    style={{
                      zIndex: hoveredHamburgerLink === slug ? 1 : 2,
                    }}
                  >
                    {hoveredHamburgerLink === slug && (
                      <motion.div
                        layoutId={id}
                        className={styles.hoveredFondo}
                        initial={false}
                        animate={{
                          borderRadius: "var(--border-radius",
                        }}
                      />
                    )}
                    <Link
                      onMouseEnter={() => setHoveredHamburgerLink(slug)}
                      className={
                        pathname === href ? styles.hamburgerActiveLinks : ""
                      }
                      href={href}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={toggleMenuOpen}
              className={styles.closeBtn}
            >
              <Close
                className={styles.closeIcon}
                aria-hidden="true"
                focusable="false"
              />
              Cerrar menu
            </button>
          </motion.div>
        </RemoveScroll>
      </FocusLock>
    </div>
  );
}
