import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

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

  return blogPosts.sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1));
  // return blogPosts.sort((p1, p2) => {
  //   const date1 = new Date(p1.publishedOn);
  //   const date2 = new Date(p2.publishedOn);
  //   return date1 < date2;
  // });
}

export async function loadBlogPost(slug) {
  const rawContent = await readFile(`/blog-mdx-files/${slug}.mdx`);

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
}
