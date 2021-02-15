import { WorksProps } from "#root/interfaces/StaticProps";

import WorkList from "./WorkList";
import { HomeWrapper } from "./Home.styles";

const Home: React.FC<WorksProps> = ({ works }) => (
  <HomeWrapper>
    <WorkList works={works} />
  </HomeWrapper>
);

export default Home;
