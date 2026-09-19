import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    role: z.string(),
    year: z.string(),
    revision: z.string(),
    status: z.string(),
    published: z.boolean().default(false),
    featured: z.boolean().default(false),
    disciplines: z.array(z.string()),
    problem: z.string(),
    contribution: z.string(),
    results: z.string(),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })),
    gallery: z.array(z.object({ label: z.string(), caption: z.string() })),
    links: z.array(z.object({ label: z.string(), href: z.string() }))
  })
});

export const collections = { projects };
