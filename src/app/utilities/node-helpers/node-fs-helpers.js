import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import React from "react";

function readFile(localPath) {
  return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}

function readDirectory(localPath) {
  return fs.readdir(path.join(process.cwd(), localPath));
}

export async function getBlogPostList() {
  const fileNames = await readDirectory("/blog-mdx-files");
  const blogPosts = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/blog-mdx-files/${fileName}`);

    const { data: frontmatter } = matter(rawContent);

    blogPosts.push({
      slug: fileName.replace(".mdx", ""),
      ...frontmatter,
    });
  }
  return blogPosts.sort((p1, p2) => (p1.publishedOn > p2.publishedOn ? 1 : -1));
}

export async function loadBlogPost(slug) {
  const filePath = path.join(process.cwd(), "/blog-mdx-files/", `${slug}.mdx`);
  const rawContent = await fs.readFile(filePath, "utf8");

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
}

// export async function loadBlogPost(slug) {
//   const rawContent = await readFile(`/blog-mdx-files/${slug}.mdx`);

//   const { data: frontmatter, content } = matter(rawContent);

//   return { frontmatter, content };
// }

// export const loadBlogPost = React.cache(async function loadBlogPost(slug) {
//   let rawContent;

//   try {
//     rawContent = await readFile(`/blog-mdx-files/${slug}.mdx`);
//   } catch (error) {

//     return null;
//   }

//   const { data: frontmatter, content } = matter(rawContent);

//   return { frontmatter, content };
// });
