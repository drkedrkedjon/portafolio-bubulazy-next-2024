import { Menu } from "react-feather";
import styles from "./NavMenu.module.css";

export default function NavMenu() {
  return (
    <nav>
      <Menu className={styles.iconSvg} />
    </nav>
  );
}
