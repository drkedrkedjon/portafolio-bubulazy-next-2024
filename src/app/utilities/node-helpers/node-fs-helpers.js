import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import React from "react";
import { parseDate } from "../varias-utilidades";

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

  return blogPosts.sort((p1, p2) => {
    const date1 = parseDate(p1.lastEdited);
    const date2 = parseDate(p2.lastEdited);
    return date1 < date2 ? 1 : -1;
  });
}

export const loadBlogPost = React.cache(async function loadBlogPost(slug) {
  const filePath = path.join(process.cwd(), "/blog-mdx-files/", `${slug}.mdx`);
  let rawContent;

  try {
    rawContent = await fs.readFile(filePath, "utf8");
  } catch (error) {
    return null;
  }

  const { data: frontmatter, content } = matter(rawContent);
  return { frontmatter, content };
});
