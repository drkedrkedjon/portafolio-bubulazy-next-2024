import styles from "./Header.module.css";
import { Sun, Moon, Menu, Rss } from "react-feather";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`wrapper ${styles.container}`}>
        <p className={styles.logo}>{"{this.sasaSavicPerusina}"}</p>
        <div className={styles.navContainer}>
          <ul className={styles.desktopLinks}>
            <li>
              <Link href={"/"}>sasa</Link>
            </li>
            <li>
              <Link href={"/"}>sasa</Link>
            </li>
            <li>
              <Link href={"/"}>sasa</Link>
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
          <nav>
            <Menu className={styles.iconSvg} />
          </nav>
        </div>
      </div>
    </header>
  );
}
