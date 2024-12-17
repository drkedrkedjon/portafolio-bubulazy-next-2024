import styles from "./page.module.css";
import { getBlogPostList } from "../utilities/node-helpers/node-fs-helpers";
import { getTranslations } from "next-intl/server";
import { BASE_METADATA } from "../utilities/constants";
import DraftsPaginationList from "../componentes/DraftsPaginationList";

export const metadata = {
  title: `Drafts Posts Listing • ${BASE_METADATA.title}`,
};

export default async function BlogPostList() {
  const t = await getTranslations("DraftsPage");
  const draftPostList = await getBlogPostList();

  return (
    <main className={`wrapper ${styles.draftsFlow} ${styles.container}`}>
      <h1 className={styles.h1}>{t("title")}</h1>
      <DraftsPaginationList drafts={draftPostList} />
    </main>
  );
}
