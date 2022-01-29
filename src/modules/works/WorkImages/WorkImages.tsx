import { Box, Flex } from "@chakra-ui/react";

import Renderer from "./Renderer";

type WorkImagesProps = {
  content: string;
};

const WorkImages = ({ content }: WorkImagesProps) => {
  return (
    <Box
      background={{ base: "none", md: "rgba(148, 151, 158, 0.1)" }}
      marginTop="80px"
      minHeight="600px"
    >
      <Flex
        flexWrap="wrap"
        justifyContent={{ base: "center", lg: "space-between" }}
        w="1090px"
        mw="100%"
        margin="auto"
        marginTop="0px"
        position="relative"
        top={{ base: "-24", lg: "-80px" }}
      >
        <Renderer>{content}</Renderer>
      </Flex>
    </Box>
  );
};

export default WorkImages;
