import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { feed } from "../../../../data/feed";
export async function getStaticPaths() {
  const posts = await getCollection("blog");
  return [...new Set(posts.flatMap((post) => post.data.categories))].map(
    (category) => ({ params: { category } }),
  );
}
export const GET: APIRoute = ({ site, params }) => feed(site!, params.category);
