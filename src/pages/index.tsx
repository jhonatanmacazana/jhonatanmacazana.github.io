import { GetStaticProps } from "next";

import Header from "#root/components/Header";
import Home from "#root/components/Home";
import Intro from "#root/components/Intro";
import Layout from "#root/components/Layout";
import getWorks from "#root/content/getWorks";
import { WorkStruct } from "#root/content/Works.Context";

interface IndexProps {
  works: WorkStruct[];
}

const Index: React.FC<IndexProps> = ({ works }) => (
  <Layout>
    <div>
      <Header />
      <Intro />
      <Home works={works} />
    </div>
  </Layout>
);

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const works = getWorks();

  return { props: { works } };
};
