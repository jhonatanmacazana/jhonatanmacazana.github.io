import matter from "gray-matter";

import { WorkStruct } from "#root/interfaces/Work";

const getWorks = (): WorkStruct[] => {
  const getPages = (indexCtx: any, imagesCtx: any) => {
    const keys = indexCtx.keys();
    const values = keys.map(indexCtx);
    const data: WorkStruct[] = keys.map((key: any, index: number) => {
      const slug = key.match(/\/(.+)\/index/, "")[1];
      const value = values[index];
      const document = matter(value.default);
      const newDoc = {
        ...document,
        data: {
          ...document.data,
          date: document.data.date.toString(),
        },
      };
      const images = matter(imagesCtx.keys().map(imagesCtx)[index].default);
      delete newDoc["orig"];
      delete images["orig"];

      return { document: newDoc, slug, images };
    });
    return data;
  };

  const pages = getPages(
    require.context("#content/works", true, /index.md$/),
    require.context("#content/works", true, /images.md$/)
  ).sort(
    (a, b) => new Date(b.document.data.date).getTime() - new Date(a.document.data.date).getTime()
  );

  return pages;
};

export const getWorkBySlug = (slug: string) => {
  const allWorks = getWorks();
  const work = allWorks.filter(w => w.slug === slug)[0];
  return work;
};

export default getWorks;
