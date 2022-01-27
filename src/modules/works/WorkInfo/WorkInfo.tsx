import { Box, Flex, Text } from "@chakra-ui/react";

import Fallback from "#root/components/Fallback";
import Link from "#root/components/Link";

import { DataStruct } from "../types";
import Line from "./Line";
import Renderer from "./Renderer";
import Sidebar from "./WorkSidebar";

type WorkInfoProps = {
  data: DataStruct;
  content: string;
};

const WorkInfo = ({ data, content }: WorkInfoProps) => {
  return (
    <Box paddingTop="1.5rem">
      <Flex
        boxSizing="border-box"
        marginLeft="-60px"
        width="1290px"
        maxWidth="100%"
        margin="auto"
        padding={{ base: "0 22px 0 22px", md: "0 90px 0 40px", lg: "0" }}
      >
        <Line />

        <Box
          width="100%"
          margin="auto"
          marginLeft={{ base: "0", md: "40px", lg: "100px" }}
          marginRight={{ base: "0", lg: "100px" }}
        >
          <hgroup>
            <Text
              as="h1"
              color="#282c35"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="600"
              lineHeight="1.05em"
              letterSpacing="-0.01em"
              marginBottom="0"
              marginTop="-12px"
            >
              {data.title}
            </Text>
          </hgroup>

          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            margin="auto"
            maxWidth="100%"
            paddingTop="20px"
          >
            <Box
              boxSizing="border-box"
              marginTop={{ base: "10px", md: "21px" }}
              maxWidth="740px"
              paddingBottom={{ base: "50px", lg: "80px" }}
              ml="0"
              pl="0"
            >
              {content ? <Renderer>{content}</Renderer> : <Fallback />}

              {data?.website && (
                <Link
                  href={data.website}
                  chakraLink={{
                    background: 'url("/link-arrow.svg") right 12px center no-repeat',
                    color: "#0079ff",
                    isExternal: true,
                    fontSize: "18px",
                    fontWeight: "600",
                    marginTop: "3rem",
                    paddingRight: "38px",
                    textDecoration: "none",
                    transition: "background-position cubic-bezier(0.39, 0.58, 0.57, 1) 0.07s",
                    _hover: {
                      backgroundPosition: "right 8px center",
                    },
                  }}
                >
                  Visit website
                </Link>
              )}
            </Box>

            <Sidebar {...data} />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default WorkInfo;
