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
  const [darkMode, setDarkMode] = useState(false);

  const pathname = usePathname();
  const id = useId();

  // Dark mode stuff
  useEffect(() => {
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
  }, []);

  useEffect(() => {
    const root = document.querySelector(":root");
    if (darkMode) {
      root.style.setProperty("--clr-primario", "198, 37%, 15%");
      root.style.setProperty("--clr-secundario", "198, 31%, 17%");
      root.style.setProperty("--clr-acentado", "198, 44%, 22%");
      root.style.setProperty("--clr-texto", "0 0% 90%");
      root.style.setProperty("--clr-fondo", "198, 25%, 10%");
    } else {
      root.style.setProperty("--clr-primario", "0, 0%, 94%");
      root.style.setProperty("--clr-secundario", "0, 0%, 86%");
      root.style.setProperty("--clr-acentado", "0, 0%, 78%");
      root.style.setProperty("--clr-texto", "0 0% 10%");
      root.style.setProperty("--clr-fondo", "0, 0%, 95");
    }
  }, [darkMode, setDarkMode]);

  return (
    <header className={styles.header}>
      <div className={` ${styles.container}`}>
        <Link
          aria-label="Logo, una animación de memoji sonriendo"
          href={"/"}
        >
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
                      borderRadius: "var(--border-radius)",
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
            <button
              id="toggle-color-mode"
              aria-label="toggle color mode"
              onClick={() => setDarkMode((darkMode) => !darkMode)}
            >
              {darkMode ? (
                <Sun className={styles.iconSvg} />
              ) : (
                <Moon className={styles.iconSvg} />
              )}
            </button>
            <Link
              aria-label="RSS Feed"
              href={"/rss.xml"}
            >
              <Rss className={styles.iconSvg} />
            </Link>
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
            {/* Animate presence sirva para exit animation en framer motion cuando se desmonta la componente */}
            <AnimatePresence>
              {isMenuOpen && <NavMenu toggleMenuOpen={toggleMenuOpen} />}
            </AnimatePresence>
          </nav>
        </div>
      </div>
    </header>
  );
}
