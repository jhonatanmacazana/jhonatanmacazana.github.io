import { Flex, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

import Link from "#root/components/Link";

const defaultSocials = [
  {
    alt: "jmacazana on telegram",
    icon: <FaTelegram />,
    isExternal: true,
    href: "https://t.me/jmacazana",
  },
  {
    alt: "jmacazana on github",
    icon: <FaGithub />,
    isExternal: true,
    href: "https://github.com/jhonatanmacazana",
  },
  {
    alt: "jmacazana on linkedin",
    icon: <FaLinkedin />,
    isExternal: true,
    href: "https://linkedin.com/in/jhonatanmacazana",
  },
];

type Social = {
  alt: string;
  icon: JSX.Element;
  isExternal?: boolean;
  href: string;
};

type FooterProps = {
  noBorder?: boolean;
  logoImageAlt?: string;
  logoImageSrc?: string;
  socials?: Social[];
};

const Footer = ({
  logoImageAlt = "jmacazana logo",
  logoImageSrc = "/android-chrome-512x512.png",
  noBorder,
  socials = defaultSocials,
}: FooterProps) => {
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
        <Image src={logoImageSrc} width="4.5rem" alt={logoImageAlt} />
      </Link>

      <HStack spacing={8}>
        {socials.map(social => (
          <Link href={social.href} key={social.alt} chakraLink={{ isExternal: social.isExternal }}>
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
