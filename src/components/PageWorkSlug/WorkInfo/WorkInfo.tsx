import ReactMarkdown from "react-markdown";

import Line from "#root/components/PageWorkSlug/Line";
import Sidebar from "#root/components/PageWorkSlug/WorkSidebar";
import { DataStruct } from "#root/interfaces/Work";

import {
  Container,
  Inner,
  TopContainer,
  TopInfo,
  WebsiteLink,
  WorkInfoWrapper,
  WorkTitle,
  WorkWrapper,
} from "./WorkInfo.styles";

type WorkInfoProps = {
  data: DataStruct;
  content: string;
};

const WorkInfo = ({ data, data: { title, website }, content }: WorkInfoProps) => {
  return (
    <WorkWrapper>
      <WorkInfoWrapper>
        <TopContainer>
          <Line />
          <TopInfo>
            <hgroup>
              <WorkTitle>{title}</WorkTitle>
            </hgroup>
            <Container>
              <Inner>
                {content ? <ReactMarkdown>{content}</ReactMarkdown> : "loading"}
                {website && (
                  <WebsiteLink href={website} target="_blank" rel="noopener noreferrer">
                    Visit website
                  </WebsiteLink>
                )}
              </Inner>
              <Sidebar {...data} />
            </Container>
          </TopInfo>
        </TopContainer>
      </WorkInfoWrapper>
    </WorkWrapper>
  );
};

export default WorkInfo;
