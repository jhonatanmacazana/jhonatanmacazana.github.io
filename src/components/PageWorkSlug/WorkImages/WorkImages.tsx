import React from "react";
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
          source={content}
          renderers={{ image: ImageRenderer, paragraph: ParagraphRenderer }}
        />
      </ImagesWrapper>
    </WorkImagesWrapper>
  );
};

export default WorkImages;
