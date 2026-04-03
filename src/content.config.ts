import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    author: z.string(),
    handle: z.string(),
    avatar: z.string().default('auto'),
    abstract: z.string(),
    date: z.string(),
    tags: z.array(z.string()).optional(),
    series: z.union([
      z.string(),
      z.object({ id: z.string(), name: z.string() }),
    ]).optional(),
  }),
});

const users = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/users' }),
  schema: z.object({
    name: z.string(),
    handle: z.string(),
    avatar: z.string().default('auto'),
    bio: z.string().default(''),
    location: z.string().optional(),
    website: z.string().optional(),
    joinDate: z.string().default('2024-01'),
    bannerColor: z.string().optional(),
  }),
});

export const collections = { posts, users };
