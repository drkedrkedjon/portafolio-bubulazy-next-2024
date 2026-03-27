import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import React from "react";
import { parseDate } from "../varias-utilidades";

const BLOG_MDX_DIR = path.join(process.cwd(), "blog-mdx-files");

function readFile(fileName) {
  return fs.readFile(path.join(BLOG_MDX_DIR, fileName), "utf8");
}

function readDirectory() {
  return fs.readdir(BLOG_MDX_DIR);
}

export async function getBlogPostList() {
  const fileNames = await readDirectory();
  const blogPosts = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(fileName);
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
  const filePath = path.join(BLOG_MDX_DIR, `${slug}.mdx`);
  let rawContent;

  try {
    rawContent = await fs.readFile(filePath, "utf8");
  } catch (error) {
    return null;
  }

  const { data: frontmatter, content } = matter(rawContent);
  return { frontmatter, content };
});
