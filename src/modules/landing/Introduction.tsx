import { Box, Button, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";

import { StyledLink } from "#root/components/Link";

type IntroductionProps = {
  profileInfo: {
    mainText: string;
    callToAction: {
      label: string;
      url: string;
    };
  };
};

const startups = [
  { label: "Nextmedicall", url: "https://nextmedicall.com/" },
  { label: "Linkop", url: "https://linkop.pe/" },
  { label: "Certificatek", url: "https://certificatek.com/" },
];

const Introduction = ({ profileInfo }: IntroductionProps) => {
  return (
    <Flex
      alignItems={{ base: "center", lg: "start" }}
      flexDirection={{ base: "column", lg: "row" }}
      boxSizing="border-box"
      marginBottom={{ base: "none", md: "50px", lg: "94px" }}
      marginX="auto"
      marginTop={{ base: "1.5rem", md: "3rem", lg: "9rem" }}
      maxW="100%"
      padding={{ base: "0 1.25rem", lg: "0 1.875rem" }}
      width="880px"
    >
      <Box marginX="auto" maxW="100%" w={{ base: "100%", lg: "40%" }}>
        <Text
          as="h1"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight={700}
          letterSpacing="-0.04em"
        >
          {profileInfo.mainText}
        </Text>

        <Text
          color="#6d7777"
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          fontWeight={500}
          lineHeight="1.3em"
          mb="1.5rem"
          mt="0.875rem"
        >
          full stack developer <Box as="br" display={{ base: "none", lg: "block" }} />
          electrical engineer <Box as="br" display={{ base: "none", lg: "block" }} />
          and SRE
        </Text>

        <StyledLink
          _hover={{ textDecoration: "none" }}
          href={profileInfo.callToAction.url}
          isExternal
        >
          <Button
            colorScheme="primary"
            fontSize={{ base: "md", sm: "xl", md: "2xl" }}
            paddingY={{ base: "0.5rem", sm: "1rem", md: "1.5rem" }}
            variant="outline"
          >
            {profileInfo.callToAction.label}
          </Button>
        </StyledLink>
      </Box>
      <Box
        color="#3f4146"
        lineHeight="1.6em"
        fontSize="lg"
        marginTop={{ base: "20px", lg: "10px" }}
        marginLeft="auto"
        width={{ base: "100%", lg: "470px" }}
      >
        <Text>
          I'm a Peruvian-based Jr. Full stack developer for over 2 years. I'm interested in the{" "}
          <StyledLink href="https://jamstack.org/" isExternal>
            JAM Stack
          </StyledLink>
          , with plenty of experience in{" "}
          <Text as="strong" color="#46474a">
            React
          </Text>{" "}
          and{" "}
          <Text as="strong" color="#46474a">
            Next.js
          </Text>{" "}
          work. Also, I'm a big fan of{" "}
          <StyledLink href="https://hasura.io/" isExternal>
            Hasura
          </StyledLink>
          , along with GraphQL and{" "}
          <StyledLink href="https://www.graphql-code-generator.com/" isExternal>
            other tools
          </StyledLink>{" "}
          that work really nicely with Typescript.
        </Text>

        <Text mt="0.75rem">
          I have a bachelor's degree in electrical engineering with a specialization in Digital and
          Computational Systems, with a special interest in IoT devices with low power consumption
          and the entire ecosystem for the development of a specific application.
        </Text>

        <Text mt="0.75rem">
          I have developed my own web cloud to monitor remote LoRa-based stations. Lately, I have
          realized worked with the open-source platform{" "}
          <StyledLink href="https://thingsboard.io/" isExternal>
            Thingsboard
          </StyledLink>
          . I have worked on several projects related to environmental parameter acquisition with
          IoT. Published one indexed paper in IEEE related to temperature acquisition inside
          buildings.
        </Text>

        <Box mt="0.75rem">
          <Text>
            I have also a good understanding of the cloud by constantly trying up new technologies.
            I have managed several production environments with Docker containers, orchestrators,
            and load balancers. Worked as Software architect of three Peruvian startups:
          </Text>
          <UnorderedList>
            {startups.map(el => (
              <ListItem key={el.label}>
                <StyledLink href={el.url} isExternal>
                  {el.label}
                </StyledLink>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Box>
    </Flex>
  );
};

export default Introduction;
