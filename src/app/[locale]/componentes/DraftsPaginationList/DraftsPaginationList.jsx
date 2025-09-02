"use client";
import styles from "./DraftsPaginationList.module.css";
import { useState } from "react";
import DraftsCard from "../DraftsCard";
import { ArrowLeftCircle, ArrowRightCircle } from "react-feather";

export default function DraftsPaginationList({ drafts }) {
  const [pageNumber, setPageNumber] = useState(3);
  const [draftsPerPage, setDraftsPerPage] = useState(2);

  const initialSlice = (pageNumber - 1) * draftsPerPage;
  const finalSlice = initialSlice + draftsPerPage;
  const pageContent = drafts.slice(initialSlice, finalSlice);
  const numberOfPages = Math.ceil(drafts.length / draftsPerPage);

  return (
    <>
      {pageContent.map((draft) => (
        <DraftsCard
          key={draft.slug}
          {...draft}
        />
      ))}
      <div className={styles.controlsContainer}>
        <div className={styles.prevNextContainer}>
          <button>
            <ArrowLeftCircle />
          </button>
          <div>{pageNumber}</div>
          <button>
            <ArrowRightCircle />
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
            <span className={styles.tick}>1</span>
            <span className={styles.tick}>2</span>
            <span className={styles.tick}>3</span>
            <span className={styles.tick}>4</span>
            <span className={styles.tick}>5</span>
          </div>
        </div>
      </div>
    </>
  );
}
