import { defineCollection, z } from "astro:content";

const sections = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    order: z.number().int().nonnegative(),
    anchor: z.string().min(1),
  }),
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  sections,
  pages,
};
