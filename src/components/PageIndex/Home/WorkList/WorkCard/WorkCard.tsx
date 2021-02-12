import Link from "next/link";

import Icon from "#root/components/Shared/Icon";
import { WorkStruct } from "#root/interfaces/Work";

import {
  Card,
  CardDate,
  CardImages,
  CardServices,
  CardTech,
  CardTechIcon,
  CardTitle,
  Info,
} from "./WorkCard.styles";

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
      <Card style={{ background: bgColors[index % 4] }}>
        <Info>
          <CardDate>{new Date(date).getFullYear()}</CardDate>
          <CardTitle>{title}</CardTitle>
          <CardServices>
            {services.split(", ").map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </CardServices>
          <CardTech>
            {tech.split(", ").map(t => (
              <CardTechIcon key={t}>
                <Icon white>{t}</Icon>
              </CardTechIcon>
            ))}
          </CardTech>
        </Info>
        <CardImages>
          <img src={featuredImg} alt={title} />
        </CardImages>
      </Card>
    </Link>
  );
};

export default WorkCard;
