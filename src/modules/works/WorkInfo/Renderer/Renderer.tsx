import ReactMarkdown from "react-markdown";

import HeadingRenderer from "./HeadingRenderer";
import ParagraphRenderer from "./ParagraphRenderer";

type MarkdownRendererProps = {
  children: string;
};

const MarkdownRenderer = ({ children }: MarkdownRendererProps) => {
  return (
    <ReactMarkdown components={{ p: ParagraphRenderer, h2: HeadingRenderer }}>
      {children}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
