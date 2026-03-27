import { BASE_METADATA } from "@/app/[locale]/utilities/constants";
import {
  getBlogPostList,
  loadBlogPost,
} from "@/app/[locale]/utilities/node-helpers/node-fs-helpers.js";
import { formatDate } from "@/app/[locale]/utilities/varias-utilidades";
import { Link } from "@/i18n/navigation";
import { Code } from "bright";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import PhotoGallerySmall from "../../componentes/PhotoGallerySmall";
import "./drafts.css";

Code.theme = "dracula-soft";
Code.lineNumbers = true;

// SSG: Generate static params for all blog post slugs
export async function generateStaticParams() {
  const posts = await getBlogPostList();
  return posts.map((post) => ({ draftSlug: post.slug }));
}

//  Check lo de React.cache en node-helpers para no ejecutar dos veces la function
export async function generateMetadata(props) {
  const params = await props.params;
  const draftPostData = await loadBlogPost(params.draftSlug);

  if (!draftPostData) {
    return null;
  }

  const { frontmatter } = draftPostData;

  return {
    title: `${frontmatter.title} • ${BASE_METADATA.title}`,
    description: frontmatter.abstract,
    openGraph: {
      title: `${frontmatter.title} • ${BASE_METADATA.title}`,
      description: `${frontmatter.abstract}`,
      siteName: "Bubulazy.com",
      publishedTime: `${frontmatter.initialDate}`,
      author: "Drkedrkedjon",
      images: [
        {
          url: "https://bubulazy.com/avatar-strong.png",
          width: 870,
          height: 870,
        },
      ],
      type: "article",
    },
  };
}

export default async function DraftPage(props) {
  const params = await props.params;
  const draftsPostData = await loadBlogPost(params.draftSlug);

  if (!draftsPostData) {
    return notFound();
  }

  const { frontmatter, content } = draftsPostData;

  return (
    <main
      lang={frontmatter.language}
      className="wrapper drafts-styles"
    >
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
            PhotoGallerySmall,
          }}
        />
      </article>
    </main>
  );
}
