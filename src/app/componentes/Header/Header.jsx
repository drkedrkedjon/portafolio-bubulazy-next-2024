"use client";
import styles from "./Header.module.css";
import { Sun, Moon, Menu, Rss } from "react-feather";
import Link from "next/link";
import NavMenu from "../NavMenu";
import VisualyHidden from "../VisualyHidden";
import useToggle from "../useToggle";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { DESKTOP_LINKS } from "@/app/utilities/constants";
import { useState, useId } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, toggleMenuOpen] = useToggle(false);
  const [hoveredDesktopLink, setHoveredDesktopLink] = useState(null);
  const pathname = usePathname();
  const id = useId();

  return (
    <header className={styles.header}>
      <div className={`wrapper ${styles.container}`}>
        <Link
          href={"/"}
          className={styles.logo}
        >
          {"{ this.Sasha }"}
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
            <button>
              <Sun className={styles.iconSvg} />
              {/* <Moon /> */}
            </button>
            <Link href={"/rss.xml"}>
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
            {/* Animate presence sirva para exit animation en framer motion cuando se dewsmonta la componente */}
            <AnimatePresence>
              {isMenuOpen && (
                <NavMenu toggleMenuOpen={toggleMenuOpen}>
                  <ul>
                    <li>
                      <Link href={"/"}>Sobre mi</Link>
                    </li>
                    <li>
                      <Link href={"/"}>Proyectos</Link>
                    </li>
                    <li>
                      <Link href={"/"}>Blog</Link>
                    </li>
                  </ul>
                </NavMenu>
              )}
            </AnimatePresence>
          </nav>
        </div>
      </div>
    </header>
  );
}
