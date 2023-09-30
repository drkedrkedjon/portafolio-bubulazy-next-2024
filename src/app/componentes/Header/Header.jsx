"use client";
import styles from "./Header.module.css";
import { Sun, Moon, Menu, Rss } from "react-feather";
import Link from "next/link";
import NavMenu from "../NavMenu";
import VisualyHidden from "../VisualyHidden";
import useToggle from "../useToggle";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, toggleMenuOpen] = useToggle(false);
  const pathname = usePathname();

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
            aria-hidden="true"
            className={styles.desktopNav}
          >
            <li>
              <Link
                className={`${styles.desktopLinks} ${
                  pathname === "/" ? styles.desktopActiveLink : ""
                }`}
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.desktopLinks} ${
                  pathname === "/proyectos" ? styles.desktopActiveLink : ""
                }`}
                href={"/"}
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.desktopLinks} ${
                  pathname === "/cv" ? styles.desktopActiveLink : ""
                }`}
                href={"/"}
              >
                CV
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.desktopLinks} ${
                  pathname === "/blog" ? styles.desktopActiveLink : ""
                }`}
                href={"/"}
              >
                Blog
              </Link>
            </li>
          </ul>
          <div className={styles.icons}>
            <button>
              <Sun className={styles.iconSvg} />
              {/* <Moon /> */}
            </button>
            <Link href={"/rss.xml"}>
              <Rss className={styles.iconSvg} />
            </Link>
          </div>
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
