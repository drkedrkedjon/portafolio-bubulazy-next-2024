"use client";
import styles from "./Header.module.css";
import { Sun, Moon, Menu, Rss } from "react-feather";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import NavMenu from "../NavMenu";
import VisualyHidden from "../../utilities/VisualyHidden";
import useToggle from "../../utilities/useToggle";
import { AnimatePresence } from "framer-motion";
import { useState, useId, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@/app/[locale]/contenido/header-footer/sasa-memoji-video.webp";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, toggleMenuOpen] = useToggle(false);
  const [hoveredDesktopLink, setHoveredDesktopLink] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [lang, setLang] = useState("en");

  const pathname = usePathname();
  const router = useRouter();
  const id = useId();
  const t = useTranslations("DesktopLinks");
  const desktopLinksKeys = ["home", "projects", "cv", "drafts"];

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

  useEffect(() => {
    setLang(document.documentElement.lang);
  }, []);

  function handleLangChange() {
    router.replace(pathname, { locale: lang === "es" ? "en" : "es" });
  }

  return (
    <header className={styles.header}>
      <div className={` ${styles.container}`}>
        <Link
          aria-label="Logo, una animación de memoji sonriendo"
          href={"/"}
        >
          {/* <video
            className={styles.memojiVideo}
            autoPlay
            loop
            muted
            playsInline
          >
            <sources
              src="/sasa-memoji-video.mp4"
              type="video/mp4"
            />
          </video> */}
          <Image
            unoptimized
            src={logo}
            alt="Logo, una animación de memoji sonriendo"
            width={60}
            height={60}
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
