import { Box, Flex, HStack, List, ListItem, Text } from "@chakra-ui/react";

import Icon from "#root/components/Icon";

type WorkSidebarProps = {
  client?: string;
  services?: string;
  tech?: string;
  title?: string;
  website?: string;
};

const WorkSidebar = ({ client, services, tech }: WorkSidebarProps) => {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row", lg: "column" }}
      justifyContent={{ base: "space-between", lg: "space-between" }}
      // h="50%"
      maxHeight="24rem"
      minWidth="220px"
      marginLeft={{ base: "0", lg: "auto" }}
      marginTop={{ base: "0", lg: "2rem" }}
      // gap={{ base: "30px", md: 0, lg: "46px" }}
    >
      {client && (
        <Box minWidth="100px">
          <Text
            color="#9699a3"
            fontSize={{ base: "13px", lg: "15px" }}
            marginBottom="5px"
            opacity="0.9"
          >
            Client
          </Text>
          <Text
            color="rgba(55, 56, 60, 0.88)"
            fontSize={{ base: "13px", lg: "15px" }}
            margin="0"
            marginBottom="4px"
            paddingLeft="0"
            whiteSpace="nowrap"
          >
            {client}
          </Text>
        </Box>
      )}

      {services && (
        <Box minWidth="100px">
          <Text
            color="#9699a3"
            fontSize={{ base: "13px", lg: "15px" }}
            marginBottom="5px"
            opacity="0.9"
          >
            Services
          </Text>
          <List paddingLeft={0} margin={0}>
            {services.split(",").map(service => (
              <ListItem
                color="rgba(55, 56, 60, 0.88)"
                fontSize={{ base: "13px", lg: "15px" }}
                margin="0"
                marginBottom="4px"
                paddingLeft="0"
                whiteSpace="nowrap"
                sx={{
                  a: {
                    color: "#0079ff",
                    fontWeight: "500",
                    textDecoration: "none",
                    background: 'url("/link-arrow.svg") right 12px center no-repeat',
                    paddingRight: "38px",
                    transition: "background-position cubic-bezier(0.39, 0.58, 0.57, 1) 0.07s",
                  },
                  "a:hover": {
                    backgroundPosition: "right 8px center",
                  },
                }}
                key={service}
              >
                {service.trim()}
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {tech && (
        <HStack minWidth="100px" spacing="0.7rem">
          {tech.split(", ").map(t => (
            <Icon key={t}>{t}</Icon>
          ))}
        </HStack>
      )}
    </Flex>
  );
};

export default WorkSidebar;
