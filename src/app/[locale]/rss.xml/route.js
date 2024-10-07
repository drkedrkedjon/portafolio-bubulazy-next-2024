import RSS from "rss";

import { BASE_METADATA } from "@/app/[locale]/utilities/constants";
import { getBlogPostList } from "@/app/[locale]/utilities/node-helpers/node-fs-helpers";

export async function GET() {
  // Create the feed using the RSS helper, and the metadata
  // about our blog.
  const feed = new RSS({
    title: BASE_METADATA.title,
    description: BASE_METADATA.description,
  });

  // Use the same helper we use on the homepage, to gather
  // information about each blog post, as a sorted array:
  const blogPosts = await getBlogPostList();

  // For each blog post, create a new item in our RSS feed:
  blogPosts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.abstract,
      date: post.publishedOn,
      url: `https://bubulazy.com/${post.language}/drafts/${post.slug}`,
    });
  });

  // Generate the raw XML string using `feed.xml`, and then
  // send it to the client. We need to set the Content-Type
  // header so that browsers / RSS clients will interpret
  // it as XML, and not as plaintext.
  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
