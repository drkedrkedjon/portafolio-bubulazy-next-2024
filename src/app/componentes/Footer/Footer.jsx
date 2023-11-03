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
          <div>
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
            <Image
              className={styles.memoji}
              src={memoji}
              alt="My memoji smiling"
            />
            <p>
              Desarollado y diseñado por Sasha utilizando Next.js, React.js,
              Vanilla CSS, framer-motion, next-mdx-remote.
            </p>

            <ul className="flow">
              <li>
                <Link href={"/"}>Mastodon</Link>
              </li>
              <li>
                <Link href={"/"}>LinkedIn</Link>
              </li>
              <li>
                <Link href={"/"}>GitHub</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.right}>
          <p>
            Hecho en Canarias: <br /> ©2020 - {thisYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
