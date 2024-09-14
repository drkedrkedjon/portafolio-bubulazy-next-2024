import styles from "./page.module.css";
import { getBlogPostList } from "../utilities/node-helpers/node-fs-helpers";
import DraftsCard from "../componentes/DraftsCard";
import { getTranslations } from "next-intl/server";

export default async function BlogPostList() {
  const t = await getTranslations("DraftsPage");
  const draftPostList = await getBlogPostList();

  return (
    <main className={`wrapper ${styles.draftsFlow} ${styles.container}`}>
      <h1 className={styles.h1}>{t("title")}</h1>
      {draftPostList.map((draft) => (
        <DraftsCard
          key={draft.slug}
          {...draft}
        />
      ))}
    </main>
  );
}
