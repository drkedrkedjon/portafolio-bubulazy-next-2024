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
            <div className={styles.children}>
              <ul onMouseLeave={() => setHoveredHamburgerLink(null)}>
                {/* <li>
                  <Link href={"/"}>Sobre mi</Link>
                </li>
                <li>
                  <Link href={"/"}>Proyectos</Link>
                </li>
                <li>
                  <Link href={"/"}>Blog</Link>
                </li> */}

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
                      className={`${styles.desktopLinksSSS} ${
                        pathname === href ? styles.desktopActiveLinkSSS : ""
                      }`}
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

{
  /* <ul
                    onMouseLeave={() => setHoveredHamburgerLink(null)}
                    aria-hidden="true"
                    className={styles.desktopNav}
                  >
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
                          className={`${styles.desktopLinks} ${
                            pathname === href ? styles.desktopActiveLink : ""
                          }`}
                          href={href}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul> */
}
