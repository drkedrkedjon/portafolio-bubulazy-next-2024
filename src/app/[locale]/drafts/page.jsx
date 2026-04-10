import { getTranslations } from "next-intl/server";
import DraftsPaginationList from "../componentes/DraftsPaginationList";
import { BASE_METADATA } from "../utilities/constants";
import { getBlogPostList } from "../utilities/node-helpers/node-fs-helpers";
import styles from "./page.module.css";

export const dynamic = "force-static";

export const metadata = {
  title: `Drafts Posts Listing • ${BASE_METADATA.title}`,
};

// SSG: Generate static params

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
