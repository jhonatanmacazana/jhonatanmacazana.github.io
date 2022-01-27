import { As, Text } from "@chakra-ui/react";
import { HeadingComponent, ReactMarkdownNames } from "react-markdown/lib/ast-to-react";

import generateId from "#root/helpers/generateId";

type HeadingRendererFunction = HeadingComponent | ReactMarkdownNames;

const HeadingRenderer: HeadingRendererFunction = props => {
  const slug = `h${props.level}-${generateId("title")}`;
  return (
    <Text
      as={`h${props.level}` as As}
      color="#282c35"
      fontSize={{ base: "19px", md: "27px", lg: "25px" }}
      fontWeight="500"
      lineHeight="149.7%"
      id={slug}
      margin="0"
      marginTop="-6px"
      marginBottom="47px"
    >
      {props.children}
    </Text>
  );
};

export default HeadingRenderer;
