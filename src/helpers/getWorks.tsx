import matter from "gray-matter";

import { DocumentStruct, ImageStruct, WorkStruct } from "#root/interfaces/Work";

const getWorks = (): WorkStruct[] => {
  const parseWorksFromFS = (
    indexCtx: __WebpackModuleApi.RequireContext,
    imagesCtx: __WebpackModuleApi.RequireContext
  ) => {
    const keys = indexCtx.keys();
    const parsedKeys = keys.filter(k => k.startsWith("./"));

    const data: WorkStruct[] = parsedKeys.map((key, index) => {
      const slug = key.match(/\/(.+)\/index/)?.[1] || "";
      const value = indexCtx(key);
      const document = matter(value.default);

      const newDoc: DocumentStruct = {
        ...document,
        orig: "",
        data: {
          ...document.data,
          date: String(document.data.date),
          title: String(document.data.title),
          year: String(document.data.year),
          services: String(document.data.services),
          tech: String(document.data.tech),
          images: String(document.data.images),
        },
      };
      const images = matter(imagesCtx(imagesCtx.keys()[index]).default);
      const parsedImages: ImageStruct = {
        ...images,
        orig: "",
      };

      return { work: newDoc, slug, images: parsedImages };
    });
    return data;
  };

  const worksSorted = parseWorksFromFS(
    require.context("#content/works", true, /index.md$/),
    require.context("#content/works", true, /images.md$/)
  ).sort((a, b) => new Date(b.work.data.date).getTime() - new Date(a.work.data.date).getTime());

  return worksSorted;
};

export const getWorkBySlug = (slug: string) => {
  const allWorks = getWorks();
  const work = allWorks.filter(w => w.slug === slug)[0];
  return work;
};

export default getWorks;
