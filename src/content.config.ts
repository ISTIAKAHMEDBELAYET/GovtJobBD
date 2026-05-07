import { defineCollection, z } from 'astro:content';

const jobs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    publishDate: z.coerce.date(),
    deadline: z.string(),
    posts: z.coerce.number().int().positive(),
    applyUrl: z.string().url(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    hot: z.boolean().default(false),
  }),
});

export const collections = {
  jobs,
};
