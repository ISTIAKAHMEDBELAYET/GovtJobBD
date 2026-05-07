import { defineCollection, z } from "astro:content";

const jobs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedDate: z.string(),
    author: z.string().default("Admin"),
    categories: z.array(z.string()),
    categorySlugs: z.array(z.string()),
    postCount: z.string(),
    deadline: z.string(),
    image: z.string().default("/images/job-placeholder.svg"),
    excerpt: z.string(),
    featured: z.boolean().default(false),
    hot: z.boolean().default(false),
    applyUrl: z.string().optional(),
  }),
});

export const collections = { jobs };
