import { loadBlogPost } from "../../utilities/node-helpers/node-fs-helpers.js";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function DraftPage({ params }) {
  const { frontmatter, content } = await loadBlogPost(params.draftSlug);
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.publishedOn}</p>
      <MDXRemote source={content} />
    </div>
  );
}
