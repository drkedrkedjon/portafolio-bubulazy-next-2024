import styles from "./NavMenu.module.css";
import { X as Close } from "react-feather";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

export default function NavMenu({ children, toggleMenuOpen }) {
  return (
    <div className={styles.navContainer}>
      <div
        className={styles.navFondo}
        onClick={toggleMenuOpen}
      />
      <FocusLock>
        <RemoveScroll>
          <div className={styles.navCajon}>
            <div>{children}</div>
            <button
              onClick={toggleMenuOpen}
              className={styles.closeBtn}
            >
              <Close
                aria-hidden="true"
                focusable="false"
              />
            </button>
          </div>
        </RemoveScroll>
      </FocusLock>
    </div>
  );
}
