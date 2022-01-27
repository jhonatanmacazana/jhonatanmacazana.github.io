import ReactMarkdown from "react-markdown";

import ImageRenderer from "./ImageRenderer";
import ParagraphRenderer from "./ParagraphRenderer";

type MarkdownRendererProps = {
  children: string;
};

const MarkdownRenderer = ({ children }: MarkdownRendererProps) => {
  return (
    <ReactMarkdown components={{ img: ImageRenderer, p: ParagraphRenderer }}>
      {children}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
