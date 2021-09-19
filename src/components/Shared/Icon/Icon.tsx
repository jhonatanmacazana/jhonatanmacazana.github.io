import { ReactNode } from "react";

import icons from "#root/helpers/icons";

import { IconWrapper } from "./Icon.styles";

interface IconProps {
  children: string & ReactNode;
  className?: string;
  key?: string;
  white?: boolean;
}

const Icon = ({ children: icon, className, white }: IconProps) => {
  const name = `${icon.toLowerCase()}${white ? "White" : ""}`;

  const src = icons?.[name];

  if (!src) return null;

  return <IconWrapper alt={icon} className={className} src={src} title={icon} />;
};

export default Icon;
