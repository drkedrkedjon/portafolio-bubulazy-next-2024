import "./drafts.css";
import { loadBlogPost } from "@/app//utilities/node-helpers/node-fs-helpers.js";
import { MDXRemote } from "next-mdx-remote/rsc";
import { formatDate } from "@/app/utilities/varias-utilidades";
import { BASE_METADATA } from "@/app/utilities/constants";
import { Code } from "bright";
import Link from "next/link";

//  Check lo de React.cache en node-helpers para no ejecutar dos veces la function
export async function generateMetadata({ params }) {
  const { frontmatter } = await loadBlogPost(params.draftSlug);
  return {
    title: `${frontmatter.title} • ${BASE_METADATA.title}`,
    description: frontmatter.abstract,
  };
}

Code.theme = "dracula-soft";

export default async function DraftPage({ params }) {
  const { frontmatter, content } = await loadBlogPost(params.draftSlug);
  return (
    <main className="wrapper drafts-styles">
      <h1>{frontmatter.title}</h1>
      <time>{formatDate(frontmatter.publishedOn, frontmatter.language)}</time>
      <article className="wrapper">
        <MDXRemote
          source={content}
          components={{
            pre: Code,
            a: Link,
          }}
        />
      </article>
    </main>
  );
}
