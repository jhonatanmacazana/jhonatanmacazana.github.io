import WorkStruct from "#root/interfaces/Work";

import { HomeWrapper } from "./Home.styles";
import WorkList from "./WorkList";

interface HomeProps {
  works: WorkStruct[];
}

const Home = ({ works }: HomeProps) => (
  <HomeWrapper>
    <WorkList works={works} />
  </HomeWrapper>
);

export default Home;
