import { Box } from "@chakra-ui/react";

import { WorkStruct } from "../works/types";

type RecentWorksProps = {
  works: WorkStruct[];
};

const RecentWorks = ({ works }: RecentWorksProps) => {
  console.log(works);
  return (
    <Box
      as="section"
      maxWidth="100%"
      marginTop={["20px", null, null, "100px"]}
      marginX="auto"
      marginBottom="0"
      boxSizing="border-box"
      width="880px"
    >
      RecentWorks
    </Box>
  );
};

export default RecentWorks;
