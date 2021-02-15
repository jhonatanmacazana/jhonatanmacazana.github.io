import { WorksProps } from "#root/interfaces/StaticProps";

import WorkCard from "./WorkCard";
import { WorkTitle, WorkContainer } from "./WorkList.styles";

const WorkList: React.FC<WorksProps> = ({ works }) => {
  return (
    <WorkContainer>
      <WorkTitle>Recent works</WorkTitle>
      <div>
        {works &&
          works.map((p, i) => <WorkCard key={p.slug} index={i} {...p} />)}
      </div>
    </WorkContainer>
  );
};

export default WorkList;
