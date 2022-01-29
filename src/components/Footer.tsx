import { Flex, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

import Link from "#root/components/Link";

type FooterProps = {
  noBorder?: boolean;
};

const Footer = ({ noBorder }: FooterProps) => {
  const socials = [
    {
      alt: "jmacazana on telegram",
      icon: <FaTelegram />,
      href: "https://t.me/jmacazana",
    },
    {
      alt: "jmacazana on github",
      icon: <FaGithub />,
      href: "https://github.com/jhonatanmacazana",
    },
    {
      alt: "jmacazana on linkedin",
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/jhonatanmacazana",
    },
  ];
  return (
    <Flex
      as="footer"
      alignItems="center"
      justifyContent="space-between"
      height="7.5rem"
      boxSizing="border-box"
      width="1200px"
      maxWidth="100%"
      paddingX="1.25rem"
      marginTop="5rem"
      margin="auto"
      borderTop={noBorder ? 0 : "1px solid rgba(62, 62, 225, 0.12)"}
    >
      <Link href="/">
        <Image src="/android-chrome-512x512.png" width="4.5rem" alt="jmacazana logo" />
      </Link>

      <HStack spacing={8}>
        {socials.map(social => (
          <Link href={social.href} key={social.alt} chakraLink={{ isExternal: true }}>
            <IconButton
              alt={social.alt}
              aria-label={social.alt}
              colorScheme="blackAlpha"
              fontSize="2rem"
              icon={social.icon}
              isRound
              variant="ghost"
            />
          </Link>
        ))}
      </HStack>
    </Flex>
  );
};

export default Footer;
