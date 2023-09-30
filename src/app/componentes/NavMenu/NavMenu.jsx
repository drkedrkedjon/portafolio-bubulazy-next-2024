import { useEffect } from "react";
import styles from "./NavMenu.module.css";
import { X as Close } from "react-feather";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { AnimatePresence, motion } from "framer-motion";

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
          </motion.div>
        </RemoveScroll>
      </FocusLock>
    </div>
  );
}
