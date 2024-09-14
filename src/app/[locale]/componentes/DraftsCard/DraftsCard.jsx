import styles from "./DraftsCard.module.css";
import { Link } from "@/i18n/routing";
import { formatDate } from "@/app/[locale]/utilities/varias-utilidades";

export default function DraftsCard({
  slug,
  title,
  lastEdited,
  abstract,
  language,
}) {
  return (
    <section>
      <Link
        aria-label={slug}
        href={`/drafts/${slug}`}
      >
        <h2
          lang={language}
          className={styles.title}
        >
          {title}
        </h2>
      </Link>
      <p className={styles.date}>{formatDate(lastEdited, language)}</p>
      <p
        lang={language}
        className={styles.abstract}
      >
        {abstract}
      </p>
    </section>
  );
}
