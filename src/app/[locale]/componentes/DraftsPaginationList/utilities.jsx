"use client";
import { useState } from "react";

export function pagination() {
  const [pageNumber, setPageNumber] = useState(3);
  const [draftsPerPage, setDraftsPerPage] = useState(3);

  const numberOfPages = Math.ceil(drafts.length / draftsPerPage);

  const initialSlice = (pageNumber - 1) * draftsPerPage;
  const finalSlice = initialSlice + draftsPerPage;
  const pageContent = drafts.slice(initialSlice, finalSlice);

  return { pageContent, numberOfPages, setPageNumber, setDraftsPerPage };
}
