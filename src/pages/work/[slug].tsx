import Head from "next/head";
import { useEffect } from "react";
import removeMd from "remove-markdown";

import { WorkArticle } from "#root/components/PageWorkSlug/Slug.styles";
import WorkImages from "#root/components/PageWorkSlug/WorkImages";
import WorkInfo from "#root/components/PageWorkSlug/WorkInfo";
import Footer from "#root/components/Shared/Footer";
import Header from "#root/components/Shared/Header";
import SEO from "#root/components/Shared/SEO";
import getWorks, { getWorkBySlug } from "#root/helpers/getWorks";
import { WorkProps } from "#root/interfaces/StaticProps";

const Post: React.FC<WorkProps> = ({ work }) => {
  useEffect(() => {
    setTimeout(() => {
      document.body.classList.add("withAnim");
    }, 0);
  }, []);

  // const currentIndex = works.findIndex(w => w.slug === wid);

  const {
    document: { data, content },
    images,
  } = work;
  // const nextWork = works[currentIndex + 1] ? works[currentIndex + 1] : works[0];

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <SEO
        title={data.title}
        description={removeMd(content.trim()).substring(0, 160)}
        image={data.featuredImg}
      />
      <Header />
      <WorkArticle>
        <WorkInfo data={data} content={content} />
        <WorkImages content={images.content} />
      </WorkArticle>
      {/* <NextWork nextSlug={nextWork.slug}>
        <WorkInfo data={nextWork.document.data} content={nextWork.document.content} />
      </NextWork> */}
      <Footer noBorder />
    </>
  );
};

export default Post;

interface Params {
  params: {
    slug: string;
  };
}

export const getStaticProps = async ({ params }: Params) => {
  const work = getWorkBySlug(params.slug);

  return { props: { work } };
};

export const getStaticPaths = async () => {
  const works = getWorks();

  return {
    paths: works.map(work => {
      return {
        params: { slug: work.slug },
      };
    }),
    fallback: false,
  };
};
