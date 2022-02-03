import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "#root/components/Header";

export default {
  title: "Component/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const HeaderComponent = Template.bind({});

HeaderComponent.args = {
  logoImageAlt: "logo",
  logoImageSrc: "/android-chrome-512x512.png",
  links: [
    { label: "Resume", href: "/assets/Resume.pdf", isExternal: true },
    { label: "E-Mail", href: "mailto:contact@jmacazana.com", isExternal: true },
  ],
};
