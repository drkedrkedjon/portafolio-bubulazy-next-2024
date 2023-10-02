import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className="wrapper">
        <h1 className={styles.title}>Hero</h1>
      </div>
    </div>
  );
}
