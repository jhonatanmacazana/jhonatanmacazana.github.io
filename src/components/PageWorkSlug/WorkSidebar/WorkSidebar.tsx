import Icon from "#root/components/Shared/Icon";

import {
  ClientItem,
  SectionWrapper,
  ServiceItem,
  SidebarWrapper,
  TechSectionWrapper,
  Title,
} from "./WorkSidebar.styles";

interface SBProps {
  client?: string;
  services?: string;
  tech?: string;
  title?: string;
  website?: string;
}

const WorkSidebar = ({ client, services, tech }: SBProps) => (
  <SidebarWrapper>
    {client && (
      <SectionWrapper>
        <Title>Client</Title>
        <ClientItem>{client}</ClientItem>
      </SectionWrapper>
    )}
    {services && (
      <SectionWrapper>
        <Title>Services</Title>
        <ul>
          {services.split(", ").map(s => (
            <ServiceItem key={s}>{s}</ServiceItem>
          ))}
        </ul>
      </SectionWrapper>
    )}
    {tech && (
      <TechSectionWrapper>
        {tech.split(", ").map(t => (
          <Icon key={t}>{t}</Icon>
        ))}
      </TechSectionWrapper>
    )}
  </SidebarWrapper>
);

export default WorkSidebar;
