import { GetStaticProps } from "next";

import Home from "#root/components/PageIndex/Home";
import Intro from "#root/components/PageIndex/Intro";
import Footer from "#root/components/Shared/Footer";
import Header from "#root/components/Shared/Header";
import getWorks from "#root/helpers/getWorks";
import { WorkStruct } from "#root/interfaces/Work";

interface IndexProps {
  works: WorkStruct[];
}

const Index: React.FC<IndexProps> = ({ works }) => (
  <div>
    <Header />
    <Intro />
    <Home works={works} />
    <Footer />
  </div>
);

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const works = getWorks();

  return { props: { works } };
};
