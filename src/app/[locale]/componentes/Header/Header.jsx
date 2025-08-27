"use client";
import styles from "./Header.module.css";
import { Sun, Moon, Menu, Rss } from "react-feather";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import NavMenu from "../NavMenu";
import VisualyHidden from "../../utilities/VisualyHidden";
import useToggle from "../../utilities/useToggle";
import { AnimatePresence } from "motion/react";
import { useState, useId, useEffect } from "react";
import { motion } from "motion/react";
import logo from "@/app/[locale]/contenido/header-footer/sasa-memoji-small.webp";
import Image from "next/image";
import { useHandleHeaderScroll, useToggleDarkMode } from "./utilities";

export default function Header() {
  const [isMenuOpen, toggleMenuOpen] = useToggle(false);
  const [hoveredDesktopLink, setHoveredDesktopLink] = useState(null);
  const [lang, setLang] = useState("en");

  const pathname = usePathname();
  const router = useRouter();
  const id = useId();
  const t = useTranslations("DesktopLinks");
  const desktopLinksKeys = ["home", "projects", "cv", "drafts"];

  useEffect(() => {
    setLang(document.documentElement.lang);
  }, []);

  function handleLangChange() {
    router.replace(pathname, { locale: lang === "es" ? "en" : "es" });
  }

  // Custom hook para ocultar header on scroll down
  const scrollDirection = useHandleHeaderScroll();
  // Custom hook para toggle dark mode
  const [darkMode, toggleDarkMode] = useToggleDarkMode();

  return (
    <header className={`${styles.header} ${styles[scrollDirection]}`}>
      <div className={` ${styles.container}`}>
        <Link
          aria-label="Logo, una animación de memoji sonriendo"
          href={"/"}
        >
          <Image
            unoptimized
            src={logo}
            loading="eager"
            alt="Logo, una animación de memoji sonriendo"
            width={56}
            height={56}
            className={styles.memojiVideo}
          />
        </Link>
        <div className={styles.navContainer}>
          <ul
            onMouseLeave={() => setHoveredDesktopLink(null)}
            className={styles.desktopNav}
          >
            {desktopLinksKeys.map((key) => (
              <li key={key}>
                {hoveredDesktopLink === key && (
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
                  onMouseEnter={() => setHoveredDesktopLink(key)}
                  className={`${styles.desktopLinks} ${
                    pathname.includes(t(`${key}.href`)) &&
                    t(`${key}.href`) !== "/"
                      ? styles.desktopActiveLink
                      : ""
                  }`}
                  href={t(`${key}.href`)}
                >
                  {t(`${key}.label`)}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.icons}>
            <button
              id="toggle-color-mode"
              aria-label="toggle color mode"
              onClick={() => toggleDarkMode()}
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
              <VisualyHidden>RSS Feed</VisualyHidden>
            </Link>
            <button
              onClick={handleLangChange}
              className={styles.langBtn}
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
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
