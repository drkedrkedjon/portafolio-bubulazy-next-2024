"use client";
import DraftsCard from "../DraftsCard";

export default function DraftsPaginationList({ drafts }) {
  return (
    <>
      {drafts.map((draft) => (
        <DraftsCard
          key={draft.slug}
          {...draft}
        />
      ))}
    </>
  );
}
