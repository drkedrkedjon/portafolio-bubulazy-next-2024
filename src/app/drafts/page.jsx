import { getBlogPostList } from "../utilities/node-helpers/node-fs-helpers";
import Link from "next/link";

export default async function BlogPostList() {
  const blogPostList = await getBlogPostList();

  return (
    <div>
      {blogPostList.map(({ slug, title, publishedOn, excerpt }) => (
        <div key={slug}>
          <Link href={`/drafts/${slug}`}>{title}</Link>
          <p>{publishedOn}</p>
          <p>{excerpt}</p>
        </div>
      ))}
    </div>
  );
}
