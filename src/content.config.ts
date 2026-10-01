import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.iso.datetime({ offset: true }),
    path: z.string(),
    categories: z.array(z.string()),
    description: z.string(),
  }),
});

export const collections = { blog };
