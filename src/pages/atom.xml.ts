import type { APIRoute } from "astro";
import { feed } from "../data/feed";
export const GET: APIRoute = ({ site }) => feed(site!);
