import { Box, Flex, Grid, GridProps, HStack, Img, List, ListItem, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import Icon from "#root/components/Icon";
import Link from "#root/components/Link";
import { WorkStruct } from "#root/modules/works/types";

const bgColors = ["#4A2BAF", "#0F61C0", "#9E2B79", "#4146B5"];

type WorkCardProps = WorkStruct & {
  index: number;
};

// const Card = Grid;
const Card = motion<GridProps>(Grid);

const WorkCard = ({
  index,
  slug,
  work: {
    data: { title, date, services, tech, featuredImg },
  },
}: WorkCardProps) => {
  return (
    <Link
      as={`/work/${slug}`}
      href="/work/[wid]"
      chakraLink={{ _hover: { textDecoration: "none" } }}
    >
      <Card
        // _hover={{ transform: "scale(1.02)", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.28)" }}
        // transition="transform 0.24s cubic-bezier(0.18, 0.89, 0.4, 1.03), box-shadow 0.2s ease-in"
        borderRadius="4px"
        boxShadow="0 4px 17px 1px rgba(0, 0, 0, 0.18)"
        cursor="pointer"
        bg={bgColors[index % 4]}
        gap={6}
        margin="auto"
        overflow="hidden"
        templateColumns={{ base: "1fr", lg: "4fr 5fr" }}
        textDecoration="none"
        w={{ base: "80vw", md: "60vw", lg: "880px" }}
        h={{ base: "540px", md: "720px", lg: "440px" }}
        whileHover={{
          boxShadow: "0px 4px 20px 1px rgba(0, 0, 0, 0.28)",
          scale: 1.02,
          transition: { duration: 0.25, ease: [0.18, 0.86, 0.4, 1.03] },
        }}
        // whileTap={{
        //   scale: 0.98,
        //   transition: { duration: 0.2, ease: "easeIn" },
        // }}
      >
        <Flex
          alignItems="flex-start"
          flexDirection="column"
          justifyContent="space-between"
          color="white"
          boxSizing="border-box"
          // height={{ base: "400px", lg: "100%" }}
          marginLeft={{ base: "0", lg: "auto" }}
          maxWidth="100%"
          padding={{ base: "2.5rem", lg: "3.75rem" }}
          paddingRight={0}
          spacing={5}
          width="100%"
          // width={{ base: "350px", lg: "400px" }}
        >
          <Box>
            <Text m={0} fontSize="1rem" opacity={0.8}>
              {new Date(date).getFullYear()}
            </Text>

            <Text
              as="h3"
              fontStyle="normal"
              fontWeight={600}
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              lineHeight="44px"
              margin="0"
            >
              {title}
            </Text>
          </Box>

          <List spacing={0.5}>
            {services.split(",").map(service => (
              <ListItem key={service} opacity={0.8}>
                {service.trim()}
              </ListItem>
            ))}
          </List>

          <HStack sx={{ img: { height: "30px" } }}>
            {tech.split(", ").map(t => (
              <Flex alignItems="center" height="30px" justifyContent="center" key={t} width="44px">
                <Icon white>{t}</Icon>
              </Flex>
            ))}
          </HStack>
        </Flex>

        <Flex
          alignItems="flex-start"
          justifyContent="flex-end"
          // flex="1"
          // height={{ base: "420px", md: "700px", lg: "auto" }}
          height="auto"
          overflow="hidden"
          padding="0"
        >
          <Img
            alt={title}
            borderRadius="3px"
            boxShadow="0px 3.32378px 20.6857px rgba(0, 0, 0, 0.2)"
            height={{ base: "100%", lg: "auto" }}
            // height="100%"
            src={featuredImg}
            maxWidth={{ base: "none", lg: "100%" }}
          />
        </Flex>
      </Card>
    </Link>
  );
};

export default WorkCard;
