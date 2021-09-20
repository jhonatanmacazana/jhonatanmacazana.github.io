import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { useEffect } from "react";
import removeMd from "remove-markdown";

import { WorkArticle } from "#root/components/PageWorkSlug/Slug.styles";
import WorkImages from "#root/components/PageWorkSlug/WorkImages";
import WorkInfo from "#root/components/PageWorkSlug/WorkInfo";
import Footer from "#root/components/Shared/Footer";
import Header from "#root/components/Shared/Header";
import SEO from "#root/components/Shared/SEO";
import getWorks, { getWorkBySlug } from "#root/helpers/getWorks";
import WorkStruct from "#root/interfaces/Work";

interface WorkSlugProps {
  work: WorkStruct;
}

interface WorkSlugParams extends ParsedUrlQuery {
  slug: string;
}

const WorkSlug = ({ work: { images, work } }: WorkSlugProps) => {
  useEffect(() => {
    setTimeout(() => {
      document.body.classList.add("withAnim");
    }, 0);
  }, []);

  return (
    <>
      <SEO
        title={work.data.title}
        description={removeMd(work.content.trim()).substring(0, 160)}
        image={work.data.featuredImg}
      />

      <Header />

      <WorkArticle>
        <WorkInfo data={work.data} content={work.content} />
        <WorkImages content={images.content} />
      </WorkArticle>

      <Footer noBorder />
    </>
  );
};

export default WorkSlug;

export const getStaticProps: GetStaticProps<WorkSlugProps, WorkSlugParams> = async ({ params }) => {
  const work = getWorkBySlug(params!.slug);

  return { props: { work } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const works = getWorks();

  return {
    fallback: false,
    paths: works.map(work => ({ params: { slug: work.slug } })),
  };
};
