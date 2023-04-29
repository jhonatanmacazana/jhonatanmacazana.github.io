import { defineCollection, z } from "astro:content";

import { techParser } from "@/lib/icons";

const profileCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
  }),
});

const worksCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    client: z.string(),
    services: z.string(),
    tech: techParser,
    website: z.string(),
    featuredImg: z.string(),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        width: z.number().optional(),
        height: z.number().optional(),
      })
    ),
  }),
});

export const collections = {
  profile: profileCollection,
  works: worksCollection,
};
