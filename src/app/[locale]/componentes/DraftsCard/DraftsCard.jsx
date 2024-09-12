import styles from "./DraftsCard.module.css";
import Link from "next/link";
import { formatDate } from "@/app/[locale]/utilities/varias-utilidades";

export default function DraftsCard({
  slug,
  title,
  lastEdited,
  abstract,
  language,
}) {
  return (
    <div>
      <Link
        aria-label={slug}
        href={`/drafts/${slug}`}
      >
        <h2 className={styles.title}>{title}</h2>
      </Link>
      <p className={styles.date}>{formatDate(lastEdited, language)}</p>
      <p className={styles.abstract}>{abstract}</p>
    </div>
  );
}
