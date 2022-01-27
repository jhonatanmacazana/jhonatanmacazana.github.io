import { Text } from "@chakra-ui/react";
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
  return (
    <Text
      fontStyle="normal"
      fontWeight="400"
      lineHeight="1.5em"
      fontSize={{ base: "20px", lg: "22px" }}
      color="#3b4c56"
      marginBottom="40px"
      marginTop="0px"
    >
      {children}
    </Text>
  );
};

export default ParagraphRenderer;
