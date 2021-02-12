import SEO from "#root/components/Shared/SEO";
import { WorksProps } from "#root/interfaces/StaticProps";

import WorkList from "./WorkList";
import { HomeWrapper } from "./Home.styles";

const Home: React.FC<WorksProps> = ({ works }) => (
  <HomeWrapper>
    <SEO
      title="Jhonatan Macazana | Portfolio"
      description="Portfolio of Jhonatan Macazana, web developer, electrical student, and sysadmin engineer"
    />
    <WorkList works={works} />
  </HomeWrapper>
);

export default Home;
