"use client";
import styles from "./DraftsPaginationList.module.css";
import { useState } from "react";
import DraftsCard from "../DraftsCard";

export default function DraftsPaginationList({ drafts }) {
  const [pageNumber, setPageNumber] = useState(3);
  const [draftsPerPage, setDraftsPerPage] = useState(3);

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
          <button>Last</button>
          <button>Next</button>
          <button>Resset</button>
        </div>
        <div className={styles.pagerContainer}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
      </div>
    </>
  );
}
