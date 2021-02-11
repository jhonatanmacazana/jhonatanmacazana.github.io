import { GetStaticProps } from "next";

import Home from "#root/components/PageIndex/Home";
import Intro from "#root/components/PageIndex/Intro";
import Header from "#root/components/Shared/Header";
import getWorks from "#root/content/getWorks";
import { WorkStruct } from "#root/content/Works.Context";

interface IndexProps {
  works: WorkStruct[];
}

const Index: React.FC<IndexProps> = ({ works }) => (
  <div>
    <Header />
    <Intro />
    <Home works={works} />
  </div>
);

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const works = getWorks();

  return { props: { works } };
};
