import WorkStruct from "#root/interfaces/Work";

import WorkCard from "./WorkCard";
import { WorkTitle, WorkContainer } from "./WorkList.styles";

interface WorkListProps {
  works: WorkStruct[];
}

const WorkList = ({ works }: WorkListProps) => {
  return (
    <WorkContainer>
      <WorkTitle>Recent works</WorkTitle>
      <div>{works && works.map((p, i) => <WorkCard key={p.slug} index={i} {...p} />)}</div>
    </WorkContainer>
  );
};

export default WorkList;
