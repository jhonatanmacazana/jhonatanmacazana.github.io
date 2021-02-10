import Link from "next/link";

import githubLogo from "#root/assets/socials/github.svg";
import linkedinLogo from "#root/assets/socials/linkedin.svg";

import styles from "./Footer.module.css";

interface FooterProps {
  noBorder?: boolean;
}

interface IconProps {
  alt: string;
  href: string;
  image: any;
}
const Icon: React.FC<IconProps> = ({ alt, href, image }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      <img src={image} width="30px" alt={alt}></img>
    </a>
  );
};

const Footer: React.FC<FooterProps> = ({ noBorder }) => (
  <footer>
    <div className={noBorder ? styles.containerNoBorder : styles.container}>
      <Link href="/">
        <img
          src="/android-chrome-512x512.png"
          width="70px"
          alt="jmacazana logo"
        />
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Icon
              alt="jmacazana on github"
              href="https://github.com/jhonatanmacazana"
              image={githubLogo}
            />
            <Icon
              alt="jmacazana on linkedin"
              href="https://linkedin.com/in/jhonatanmacazana"
              image={linkedinLogo}
            />
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
