"use client";
import React, { useEffect, useState } from "react";
import styles from "./footer.module.css";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import memoji from "@/app/[locale]/assets/images/generales/footer-memoji.png";

const thisYear = new Date().getFullYear();

function Footer() {
  const [lang, setLang] = useState("en");
  const t = useTranslations("Footer");
  const tt = useTranslations("HamburgerLinks");
  const desktopLinksKeys = ["home", "projects", "cv", "drafts"];

  useEffect(() => {
    setLang(document.documentElement.lang);
  }, []);

  return (
    <footer className={styles.footer}>
      <h2 className={styles.h2}>{t("title")}</h2>
      <div className={`wrapper ${styles.container}`}>
        <div className={styles.left}>
          <div className="flow">
            <h3 className={styles.h3}> {t("leftTitle")} </h3>
            <ul className="flow">
              {desktopLinksKeys.map((key) => (
                <li key={key}>
                  <Link href={tt(`${key}.href`)}>{tt(`${key}.label`)}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.center}>
          <div className={`flow ${styles.innerCenter}`}>
            <h3 className={styles.h3}>{t("centerTitle")}</h3>
            <Image
              className={styles.memoji}
              src={memoji}
              alt="My memoji smiling"
            />
            <p>{t("description")}</p>
          </div>
        </div>
        <div className={`flow ${styles.right}`}>
          <h3 className={styles.h3}>{t("rightTitle")}</h3>
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
            {t("copyRight")} <br /> ©2020 - {thisYear}
          </p>
        </div>
      </div>
    </footer>
  );
}

const PureFooter = React.memo(Footer);
export default PureFooter;
