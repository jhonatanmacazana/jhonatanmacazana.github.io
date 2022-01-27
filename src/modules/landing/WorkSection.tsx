import { Box, Heading, VStack } from "@chakra-ui/react";

import { WorkStruct } from "#root/modules/works/types";

import WorkCard from "./WorkCard";

type WorkListProps = {
  works: WorkStruct[];
};

const WorkSection = ({ works }: WorkListProps) => {
  return (
    <Box as="section" p={["0 1.25rem", "0 1.875rem", 0]}>
      <Heading as="h2" mb="30px" mt="0">
        Recent works
      </Heading>

      <VStack spacing={6}>
        {works?.map((work, idx) => (
          <WorkCard key={work.slug} index={idx} {...work} />
        ))}
      </VStack>
    </Box>
  );
};

export default WorkSection;
