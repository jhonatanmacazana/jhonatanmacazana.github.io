import { ClassAttributes, ComponentType, HTMLAttributes } from "react";
import { ReactMarkdownNames, ReactMarkdownProps } from "react-markdown/lib/ast-to-react";

type ParagraphRendererFunction =
  | ReactMarkdownNames
  | ComponentType<
      ClassAttributes<HTMLParagraphElement> &
        HTMLAttributes<HTMLParagraphElement> &
        ReactMarkdownProps
    >;

const ParagraphRenderer: ParagraphRendererFunction = ({ children }) => {
  // if (
  //   children &&
  //   children[0] &&
  //   children.length === 1 &&
  //   children[0].props &&
  //   children[0].props.src
  // ) {
  //   // rendering media without p wrapper
  //   return children;
  // }

  return <p>{children}</p>;
};

export default ParagraphRenderer;
