import styles from "./page.module.css";
import { getBlogPostList } from "../utilities/node-helpers/node-fs-helpers";
import DraftsCard from "../componentes/DraftsCard";

export default async function BlogPostList() {
  const draftPostList = await getBlogPostList();

  return (
    <main className={`wrapper ${styles.draftsFlow} ${styles.container}`}>
      {draftPostList.map((draft) => (
        <DraftsCard
          key={draft.slug}
          {...draft}
        />
      ))}
    </main>
  );
}
