import { Box, SlideFade } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useState } from "react";
import removeMd from "remove-markdown";

import Footer from "#root/components/Footer";
import Header from "#root/components/Header";
import SEO from "#root/components/SEO";
import getWorks, { getWorkBySlug } from "#root/helpers/getWorks";

import { WorkStruct } from "./types";
import WorkImages from "./WorkImages";
import WorkInfo from "./WorkInfo";

type WorkPageProps = {
  work: WorkStruct;
};

type WorkPageParams = ParsedUrlQuery & {
  slug: string;
};

const WorkPage: NextPage<WorkPageProps> = ({ work: { images, work } }) => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsShowing(true), 0);
  }, []);

  return (
    <>
      <SEO
        title={work.data.title}
        description={removeMd(work.content.trim()).substring(0, 160)}
        image={work.data.featuredImg}
      />

      <Header />

      <Box
        as="article"
        w="100%"
        maxWidth="100%"
        margin="0"
        boxSizing="border-box"
        paddingTop="50px"
      >
        <SlideFade in={isShowing} offsetY="80px">
          <WorkInfo data={work.data} content={work.content} />
        </SlideFade>
        <SlideFade in={isShowing} offsetY="200px">
          <WorkImages content={images.content} />
        </SlideFade>
      </Box>

      <Footer noBorder />
    </>
  );
};

export default WorkPage;

export const getStaticProps: GetStaticProps<WorkPageProps, WorkPageParams> = async ({ params }) => {
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
