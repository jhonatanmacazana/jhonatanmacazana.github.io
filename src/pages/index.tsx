import { GetStaticProps } from "next";

import Home from "#root/components/PageIndex/Home";
import Intro from "#root/components/PageIndex/Intro";
import Footer from "#root/components/Shared/Footer";
import Header from "#root/components/Shared/Header";
import SEO from "#root/components/Shared/SEO";
import getWorks from "#root/helpers/getWorks";
import { WorkStruct } from "#root/interfaces/Work";

interface IndexProps {
  works: WorkStruct[];
}

const Index: React.FC<IndexProps> = ({ works }) => (
  <main>
    <SEO
      title="Jhonatan Macazana | Portfolio"
      description="Portfolio of Jhonatan Macazana, web developer, electrical engineer, and SRE. Check out my latest works."
    />
    <Header />
    <Intro />
    <Home works={works} />
    <Footer />
  </main>
);

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const works = getWorks();

  return { props: { works } };
};
