import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`wrapper ${styles.container}`}>
        <p className={styles.logo}>{"{this.sasaSavicPerusina}"}</p>
        <div className={styles.navContainer}>
          <ul className={styles.ul}>
            <li>ksjfksjdf</li>
            <li>ksjfksjdf</li>
            <li>ksjfksjdf</li>
          </ul>
          <nav>mi nav</nav>
        </div>
      </div>
    </header>
  );
}
