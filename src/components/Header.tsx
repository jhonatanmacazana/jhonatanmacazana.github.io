import { Flex, HStack, Img } from "@chakra-ui/react";

import Link from "#root/components/Link";

const defaultLogoImageSrc = "/android-chrome-512x512.png";
const defaultLogoImageAlt = "logo";
const defaultNavbarLinks = [
  { label: "Resume", href: "/assets/Resume.pdf", isExternal: true },
  { label: "E-Mail", href: "mailto:contact@jmacazana.com", isExternal: true },
];

type LinkElement = {
  label: string;
  href: string;
  isExternal: boolean;
};

type Props = {
  logoImageSrc?: string;
  logoImageAlt?: string;
  links?: LinkElement[];
};

const Header = ({
  links = defaultNavbarLinks,
  logoImageAlt = defaultLogoImageAlt,
  logoImageSrc = defaultLogoImageSrc,
}: Props) => {
  return (
    <Flex
      as="header"
      alignItems="center"
      boxSizing="border-box"
      justifyContent="space-between"
      margin="auto"
      maxWidth="100%"
      paddingX={{ base: 0, md: "1.5rem", xl: "2rem" }}
      position={{ base: "static", lg: "fixed" }}
      top={{ base: "auto", lg: 0 }}
      width="100%"
      zIndex={{ base: "auto", lg: "1" }}
    >
      <Link href="/">
        <Img alt={logoImageAlt} pt="1rem" src={logoImageSrc} width={{ base: "6rem", md: "8rem" }} />
      </Link>

      <HStack as="nav" marginRight="1.25rem" spacing={4}>
        {links.map(nl => (
          <Link
            chakraLink={{
              _hover: { color: "#282c35" },
              color: "rgba(55, 56, 60, 0.73)",
              isExternal: nl.isExternal,
              fontSize: "1rem",
              opacity: 0.9,
              textDecoration: "none",
              transition: "opacity ease-in 0.2s",
            }}
            href={nl.href}
            key={nl.href}
          >
            {nl.label}
          </Link>
        ))}
      </HStack>
    </Flex>
  );
};

export default Header;
