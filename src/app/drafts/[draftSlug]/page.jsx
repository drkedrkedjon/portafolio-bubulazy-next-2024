import "./drafts.css";
import { loadBlogPost } from "@/app//utilities/node-helpers/node-fs-helpers.js";
import { MDXRemote } from "next-mdx-remote/rsc";
import { formatDate } from "@/app/utilities/varias-utilidades";
import { BASE_METADATA } from "@/app/utilities/constants";
import { Code } from "bright";
import Link from "next/link";
import { notFound } from "next/navigation";
Code.theme = "dracula-soft";

//  Check lo de React.cache en node-helpers para no ejecutar dos veces la function
export async function generateMetadata({ params }) {
  const draftPostData = await loadBlogPost(params.draftSlug);

  if (!draftPostData) {
    return null;
  }

  const { frontmatter } = draftPostData;

  return {
    title: `${frontmatter.title} • ${BASE_METADATA.title}`,
    description: frontmatter.abstract,
  };
}

export default async function DraftPage({ params }) {
  const draftsPostData = await loadBlogPost(params.draftSlug);

  if (!draftsPostData) {
    return notFound();
  }

  const { frontmatter, content } = draftsPostData;

  return (
    <main className="wrapper drafts-styles">
      <h1>{frontmatter.title}</h1>
      <div className="draft-details">
        <time>
          Last edit: {formatDate(frontmatter.lastEdited, frontmatter.language)}
        </time>
        <p>
          First edit:{" "}
          <strong>
            {formatDate(frontmatter.initialDate, frontmatter.language)}
          </strong>{" "}
          • Stage: <strong>{frontmatter.stage}</strong> • Certainty:{" "}
          <strong>{frontmatter.certainty}</strong> • Importance:{" "}
          <strong>{frontmatter.importance}</strong>
        </p>
      </div>
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
