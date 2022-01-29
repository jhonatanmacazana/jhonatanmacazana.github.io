import { Box } from "@chakra-ui/react";
import { GetStaticProps, NextPage } from "next";

import Footer from "#root/components/Footer";
import Header from "#root/components/Header";
import SEO from "#root/components/SEO";
import getWorks from "#root/helpers/getWorks";
import { WorkStruct } from "#root/modules/works/types";

import Introduction from "./Introduction";
import WorkSection from "./WorkSection";

type LandingPageProps = {
  works: WorkStruct[];
};

const profileInfo = {
  mainText: "Hi, I’m Jhonatan,",
  secondaryText: "full stack developer\nelectrical engineer\nand SRE",
  callToAction: {
    label: "Say hello",
    url: "https://t.me/jmacazana",
  },
};

const LandingPage: NextPage<LandingPageProps> = ({ works }) => {
  return (
    <>
      <SEO
        title="Jhonatan Macazana | Portfolio"
        description="Portfolio of Jhonatan Macazana, web developer, electrical engineer, and SRE. Check out my latest works."
      />
      <Box as="main">
        <Header />

        <Introduction profileInfo={profileInfo} />

        <Box as="hr" />

        <Box
          mw="100%"
          m="100px auto 0"
          boxSizing="border-box"
          w={{ base: "90%", lg: "880px" }}
          mt={{ base: "20px", lg: "100px" }}
        >
          <WorkSection works={works} />
        </Box>

        <Box mt="100px" />

        <Footer />
      </Box>
    </>
  );
};

export default LandingPage;

export const getStaticProps: GetStaticProps<LandingPageProps> = async () => {
  const works = getWorks();

  return { props: { works } };
};
