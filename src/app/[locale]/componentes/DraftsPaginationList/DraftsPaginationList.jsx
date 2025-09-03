"use client";
import styles from "./DraftsPaginationList.module.css";
import { useState } from "react";
import DraftsCard from "../DraftsCard";
import { ArrowLeftCircle, ArrowRightCircle } from "react-feather";
import { useTranslations } from "next-intl";

export default function DraftsPaginationList({ drafts }) {
  const [pageNumber, setPageNumber] = useState(1);
  const [draftsPerPage, setDraftsPerPage] = useState(4);

  const initialSlice = (pageNumber - 1) * draftsPerPage;
  const finalSlice = initialSlice + draftsPerPage;
  const pageContent = drafts.slice(initialSlice, finalSlice);
  const numberOfPages = Math.ceil(drafts.length / draftsPerPage);
  const pagesArray = Array.from({ length: numberOfPages }, (_, i) => i + 1);

  const t = useTranslations("DraftsPage");

  return (
    <>
      {pageContent.map((draft) => (
        <DraftsCard
          key={draft.slug}
          {...draft}
        />
      ))}
      <div className={styles.controlsContainer}>
        <div className={styles.contentContainer}>
          <h3>{t("pagerTitle")}</h3>
          <div className={styles.prevNextContainer}>
            <button
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber((oldValue) => oldValue - 1)}
            >
              <ArrowLeftCircle className={styles.btnIcon} />
            </button>
            <div className={styles.pageNumber}>{pageNumber}</div>
            <button
              disabled={pageNumber >= numberOfPages}
              onClick={() => setPageNumber((oldValue) => oldValue + 1)}
            >
              <ArrowRightCircle className={styles.btnIcon} />
            </button>
          </div>
          <div className={styles.rangeContainer}>
            <input
              type="range"
              className={styles.range}
              min="1"
              max={numberOfPages}
              step="1"
              value={pageNumber}
              onChange={(e) => setPageNumber(Number(e.target.value))}
            />
            <div className={styles.ticksContainer}>
              {pagesArray.map((page) => (
                <span
                  key={page}
                  className={styles.tick}
                >
                  {page}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
