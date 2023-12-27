"use client";
import styles from "./Header.module.css";
import { Sun, Moon, Menu, Rss } from "react-feather";
import Link from "next/link";
import NavMenu from "../NavMenu";
import VisualyHidden from "../../utilities/VisualyHidden";
import useToggle from "../../utilities/useToggle";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { DESKTOP_LINKS } from "@/app/utilities/constants";
import { useState, useId, useEffect } from "react";
import { motion } from "framer-motion";

import Image from "next/image";

export default function Header() {
  const [isMenuOpen, toggleMenuOpen] = useToggle(false);
  const [hoveredDesktopLink, setHoveredDesktopLink] = useState(null);
  const [darkMode, togleDarkMode] = useToggle(true);

  const pathname = usePathname();
  const id = useId();

  // Por hacer lo de modo dark
  // useEffect(() => {
  //   if (
  //     window.matchMedia &&
  //     window.matchMedia("(prefers-color-scheme: light)").matches
  //   ) {
  //     togleDarkMode();
  //     console.log("sasa");
  //   }
  // }, []);

  // console.log(window.matchMedia("(prefers-color-scheme: light)").matches);
  // console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);

  useEffect(() => {
    const root = document.querySelector(":root");
    if (darkMode) {
      /* Color negro */
      root.style.setProperty("--clr-base-uno", "0 0% 15%");
      /* Color blanco */
      root.style.setProperty("--clr-base-dos", "0 0% 90%");
      /* Naranja clarita */
      root.style.setProperty("--clr-uno", "7 79% 67%");
      /* Amarillo oscurito */
      root.style.setProperty("--clr-dos", "45 82% 70%");
      /* Amarillo clarito */
      root.style.setProperty("--clr-acento-uno", "53 72% 80%");
      /* Verde clarito */
      root.style.setProperty("--clr-acento-dos", "130 37% 75%");
    } else {
      /* Color negro */
      root.style.setProperty("--clr-base-uno", "0 0% 90%");
      /* Color blanco */
      root.style.setProperty("--clr-base-dos", "0 0% 15%");
      /* Naranja clarita */
      root.style.setProperty("--clr-uno", "7 79% 67%");
      /* Amarillo oscurito */
      root.style.setProperty("--clr-dos", "230, 33%, 15%");
      /* Amarillo clarito */
      root.style.setProperty("--clr-acento-uno", "45, 100%, 48%");
      /* Verde clarito */
      root.style.setProperty("--clr-acento-dos", "200, 15%, 43%");
    }
  }, [darkMode, togleDarkMode]);

  return (
    <header className={styles.header}>
      <div className={` ${styles.container}`}>
        <Link href={"/"}>
          <video
            className={styles.memojiVideo}
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="/sasa-memoji-video.mp4"
              type="video/mp4"
            />
          </video>
        </Link>
        <div className={styles.navContainer}>
          <ul
            onMouseLeave={() => setHoveredDesktopLink(null)}
            aria-hidden="true"
            className={styles.desktopNav}
          >
            {/* Iteramos y creamos Desktop Links */}

            {DESKTOP_LINKS.map(({ href, slug, label }) => (
              <li
                key={slug}
                // Un VUDU de z-index que hace que el fondo del link que esta en hover se muestre por debajo de los demas
                style={{
                  zIndex: hoveredDesktopLink === slug ? 1 : 2,
                }}
              >
                {hoveredDesktopLink === slug && (
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
                  onMouseEnter={() => setHoveredDesktopLink(slug)}
                  className={`${styles.desktopLinks} ${
                    pathname === href ? styles.desktopActiveLink : ""
                  }`}
                  href={href}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Greupo de botones de color y rss */}

          <div className={styles.icons}>
            <button onClick={togleDarkMode}>
              {darkMode ? (
                <Sun className={styles.iconSvg} />
              ) : (
                <Moon className={styles.iconSvg} />
              )}
            </button>
            {/* <Link href={"/rss.xml"}>
              <Rss className={styles.iconSvg} />
            </Link> */}
          </div>

          {/* Navegacion */}

          <nav
            role="navigation"
            aria-label="Menu principal"
            className={styles.nav}
          >
            <button
              aria-expanded={isMenuOpen}
              className={styles.menuButton}
              onClick={toggleMenuOpen}
            >
              <Menu
                aria-hidden="true"
                focusable="false"
                className={styles.menuIcon}
              />
              <VisualyHidden>Abrir menú principal</VisualyHidden>
            </button>
            {/* Animate presence sirva para exit animation en framer motion cuando se dewsmonta la componente */}
            <AnimatePresence>
              {isMenuOpen && <NavMenu toggleMenuOpen={toggleMenuOpen} />}
            </AnimatePresence>
          </nav>
        </div>
      </div>
    </header>
  );
}
