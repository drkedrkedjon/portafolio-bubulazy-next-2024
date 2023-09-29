import { useEffect } from "react";
import styles from "./NavMenu.module.css";
import { X as Close } from "react-feather";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

export default function NavMenu({ children, toggleMenuOpen }) {
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
      <div
        className={styles.navFondo}
        onClick={toggleMenuOpen}
      />
      <FocusLock>
        <RemoveScroll>
          <div className={styles.navCajon}>
            <div className={styles.children}>{children}</div>
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
          </div>
        </RemoveScroll>
      </FocusLock>
    </div>
  );
}
