import Link from "next/link";

import {
  ContactLinkField,
  Field,
  HeaderInner,
  HeaderWrapper,
  Logo,
  Nav,
} from "./Header.styles";

const Header: React.FC = () => (
  <HeaderWrapper>
    <HeaderInner>
      <Link href="/">
        <a>
          <Logo src="/android-chrome-512x512.png" alt="logo" />
        </a>
      </Link>
      <Nav>
        <Field
          href="/assets/CV_Eng_Macazana.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </Field>
        <ContactLinkField
          href="mailto:jhonatanmacazana1@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </ContactLinkField>
      </Nav>
    </HeaderInner>
  </HeaderWrapper>
);

export default Header;
