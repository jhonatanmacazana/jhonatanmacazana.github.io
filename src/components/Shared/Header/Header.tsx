import Link from "next/link";

import styles from "./Header.module.css";

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.headerInner}>
      <Link href="/">
        <a>
          <img
            className={styles.logo}
            src="/android-chrome-512x512.png"
            alt=""
          />
        </a>
      </Link>
      <nav className={styles.nav}>
        <a
          href="/assets/CV_Eng_Macazana.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
        <a
          className={styles.contactLink}
          href="mailto:jhonatanmacazana1@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
