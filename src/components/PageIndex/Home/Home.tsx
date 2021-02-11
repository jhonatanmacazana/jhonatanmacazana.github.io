import SEO from "#root/components/Shared/SEO";
import { WorkStruct } from "#root/interfaces/Work";

import styles from "./Home.module.css";
import WorkList from "./WorkList";

interface HomeProps {
  works: WorkStruct[];
}

const Home: React.FC<HomeProps> = ({ works }) => (
  <div className={styles.home}>
    <SEO
      title="Jhonatan Macazana | Portfolio"
      description="Portfolio of Jhonatan Macazana, web developer, electrical student, and sysadmin engineer"
    />
    <WorkList works={works} />
  </div>
);

export default Home;
