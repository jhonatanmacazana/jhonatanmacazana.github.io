import Footer from "#root/components/Footer";
import { WorkStruct } from "#root/content/Works.Context";

import WorkCard from "./WorkCard";
import styles from "./WorkList.module.css";

interface WorkListProps {
  works: WorkStruct[];
}

const WorkList: React.FC<WorkListProps> = ({ works }) => {
  return (
    <>
      <div className={styles.workContainer}>
        <h1 className={styles.title}>Recent works</h1>
        <div className={styles.workList}>
          {works &&
            works.map((p, i) => <WorkCard key={p.slug} index={i} {...p} />)}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorkList;
