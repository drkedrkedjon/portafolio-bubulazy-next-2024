import styles from "./footer.module.css";
import { HAMBURGER_LINKS } from "@/app/utilities/constants";
import Link from "next/link";
import Image from "next/image";
import memoji from "@/app/assets/images/generales/header-memoji.png";

const thisYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrapper ${styles.container}`}>
        <div className={styles.left}>
          <div className="flow">
            <h4 className={styles.h4}>Menú</h4>
            <ul className="flow">
              {HAMBURGER_LINKS.map((link) => (
                <li key={link.slug}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.center}>
          <div className={`flow ${styles.innerCenter}`}>
            <h4 className={styles.h4}>Bubulazy.com</h4>
            <Image
              className={styles.memoji}
              src={memoji}
              alt="My memoji smiling"
            />
            <p>
              Desarollado y diseñado por Sasha utilizando Next.js, React.js,
              Vanilla CSS, framer-motion, next-mdx-remote.
            </p>
          </div>
        </div>
        <div className={`flow ${styles.right}`}>
          <h4 className={styles.h4}>Social</h4>
          <ul className="flow">
            <li>
              <Link
                rel="me"
                target="_blank"
                href={"https://mastodon.social/@Drkedrkedjon"}
              >
                Mastodon
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href={"https://www.linkedin.com/in/sasa-savic-perusina/"}
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href={"https://github.com/drkedrkedjon"}
              >
                GitHub
              </Link>
            </li>
          </ul>
          <p>
            Hecho en Canarias: <br /> ©2020 - {thisYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
