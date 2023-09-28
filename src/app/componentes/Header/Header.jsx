import styles from "./Header.module.css";
import { Sun, Moon, Rss } from "react-feather";
import Link from "next/link";
import NavMenu from "../NavMenu";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`wrapper ${styles.container}`}>
        <p className={styles.logo}>{"{this.sashaSavicPerusina}"}</p>
        <div className={styles.navContainer}>
          <ul className={styles.desktopLinks}>
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
          <div className={styles.icons}>
            <button>
              <Sun className={styles.iconSvg} />
              {/* <Moon /> */}
            </button>
            <Link href={"/rss.xml"}>
              <Rss className={styles.iconSvg} />
            </Link>
          </div>
          <NavMenu />
        </div>
      </div>
    </header>
  );
}
