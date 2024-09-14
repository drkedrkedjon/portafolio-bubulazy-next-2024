import { useEffect, useState, useId } from "react";
import styles from "./NavMenu.module.css";
import { X as Close } from "react-feather";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";

export default function NavMenu({ toggleMenuOpen }) {
  const [hoveredHamburgerLink, setHoveredHamburgerLink] = useState(null);
  const pathname = usePathname();
  const id = useId();
  // next-intl stuff
  const t = useTranslations("DesktopLinks");
  const tt = useTranslations("Header");
  const desktopLinksKeys = ["home", "projects", "cv", "drafts"];

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
                {desktopLinksKeys.map((key) => (
                  <li
                    key={key}
                    style={{
                      zIndex: hoveredHamburgerLink === key ? 1 : 2,
                    }}
                  >
                    {hoveredHamburgerLink === key && (
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
                      onClick={toggleMenuOpen}
                      onMouseEnter={() => setHoveredHamburgerLink(key)}
                      className={
                        pathname === t(`${key}.href`)
                          ? styles.hamburgerActiveLinks
                          : ""
                      }
                      href={t(`${key}.href`)}
                    >
                      {t(`${key}.label`)}
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
              {tt("NavMenuCloseBtn")}
            </button>
          </motion.div>
        </RemoveScroll>
      </FocusLock>
    </div>
  );
}
