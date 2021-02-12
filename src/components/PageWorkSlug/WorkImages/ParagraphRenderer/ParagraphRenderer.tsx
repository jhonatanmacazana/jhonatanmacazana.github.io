import { ReactNode } from "react";

interface ParagraphProps extends React.FC {
  children: ReactNode | any;
}

const ParagraphRenderer: React.FC<ParagraphProps> = ({ children }) => {
  if (
    children &&
    children[0] &&
    children.length === 1 &&
    children[0].props &&
    children[0].props.src
  ) {
    // rendering media without p wrapper
    return children;
  }

  return <p>{children}</p>;
};

export default ParagraphRenderer;
