// the following code is from the Astro docs
// https://docs.astro.build/en/guides/content-collections/#defining-build-time-content-collections

// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
//  the code from the docs has both `glob` and `file`
//  keep one and remove the other, but make sure to replace whatever `const articles` uses
//  the glob() loader is good for many .md files, and the file() loader is good for one big .json file
import { glob } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
// NOTE that the `base` references the PROJECT ROOT
//  it's an ABSOLUTE filepath, not relative.
const articles = defineCollection({
  loader: glob({ base: './src/pages/articles', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),                                    // idk if we should separate the day the article was written & when the issue releases
    author: z.string(),
    image: z.object({url:z.string(), alt:z.string()}).optional(), // anything that's nested needs to be defined as nested too!
    // issue: z.coerce.date(),                                // maybe this could be like the monday the issue comes out
  }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { articles };
