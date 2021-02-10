import Link from "next/link";

import Icon from "#root/components/Shared/Icon";
import { WorkStruct } from "#root/content/Works.Context";

import styles from "./WorkCard.module.css";

const bgColors = ["#4A2BAF", "#0F61C0", "#9E2B79", "#4146B5"];

interface WCProps extends WorkStruct {
  index: number;
}

const WorkCard: React.FC<WCProps> = ({
  index,
  slug,
  document: {
    data: { title, date, services, tech, featuredImg },
  },
}) => {
  return (
    <Link href="/work/[wid]" as={`/work/${slug}`}>
      <a className={styles.card} style={{ background: bgColors[index % 4] }}>
        <div className={styles.info}>
          <p className={styles.date}>{new Date(date).getFullYear()}</p>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.services}>
            {services.split(", ").map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </div>
          <div className={styles.tech}>
            {tech.split(", ").map(t => (
              <div key={t} className={styles.techIcon}>
                <Icon white>{t}</Icon>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.images}>
          <img src={featuredImg} alt={title} />
        </div>
      </a>
    </Link>
  );
};

export default WorkCard;
