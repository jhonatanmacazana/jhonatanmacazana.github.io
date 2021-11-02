import Link from "next/link";

import { ContactLinkField, Field, HeaderInner, HeaderWrapper, Logo, Nav } from "./Header.styles";

const Header = () => (
  <HeaderWrapper>
    <HeaderInner>
      <Link href="/">
        <a>
          <Logo src="/android-chrome-512x512.png" alt="logo" />
        </a>
      </Link>
      <Nav>
        <Field href="/assets/Resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </Field>

        <ContactLinkField
          href="mailto:contact@jmacazana.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          E-Mail
        </ContactLinkField>
      </Nav>
    </HeaderInner>
  </HeaderWrapper>
);

export default Header;
