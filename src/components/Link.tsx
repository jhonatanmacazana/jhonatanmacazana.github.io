import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { ReactNode } from "react";

type Props = NextLinkProps & {
  chakraLink?: ChakraLinkProps;
  children: ReactNode;
};

const Link = ({ chakraLink, children, ...nextLinkProps }: Props) => {
  return (
    <NextLink {...nextLinkProps} passHref>
      <ChakraLink {...chakraLink}>{children}</ChakraLink>
    </NextLink>
  );
};

export const StyledLink = ({ children, href, ...rest }: ChakraLinkProps & { href: string }) => {
  return (
    <Link href={href} chakraLink={{ color: "#0079ff", textDecoration: "none", ...rest }}>
      {children}
    </Link>
  );
};

export default Link;
