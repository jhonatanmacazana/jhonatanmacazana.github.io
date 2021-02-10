import Icon from "#root/components/Shared/Icon";

import styles from "./Sidebar.module.css";

interface SBProps {
  client?: string;
  services?: string;
  tech?: string;
  title?: string;
  website?: string;
}

interface SectionProps {
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => (
  <div className={[styles.section, className].join(" ")}>{children}</div>
);

const WorkSidebar: React.FC<SBProps> = ({ client, services, tech }) => (
  <div className={styles.sidebar}>
    {client && (
      <Section>
        <p className={styles.title}>Client</p>
        <p className={styles.item}>{client}</p>
      </Section>
    )}
    {services && (
      <Section>
        <p className={styles.title}>Services</p>
        <ul>
          {services.split(", ").map(s => (
            <li className={styles.item} key={s}>
              {s}
            </li>
          ))}
        </ul>
      </Section>
    )}
    {tech && (
      <Section className={styles.techs}>
        {tech.split(", ").map(t => (
          <Icon key={t}>{t}</Icon>
        ))}
      </Section>
    )}
  </div>
);

export default WorkSidebar;
