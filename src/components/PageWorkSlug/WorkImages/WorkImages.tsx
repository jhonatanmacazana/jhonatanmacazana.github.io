import ReactMarkdown from "react-markdown";

import ImageRenderer from "./ImageRenderer";
import ParagraphRenderer from "./ParagraphRenderer";
import { ImagesWrapper, WorkImagesWrapper } from "./WorkImages.styles";

interface WorkImagesProps {
  content: string;
}
const WorkImages = ({ content }: WorkImagesProps) => {
  return (
    <WorkImagesWrapper>
      <ImagesWrapper>
        <ReactMarkdown
          // @ts-ignore
          components={{ image: ImageRenderer, paragraph: ParagraphRenderer }}
        >
          {content}
        </ReactMarkdown>
      </ImagesWrapper>
    </WorkImagesWrapper>
  );
};

export default WorkImages;
