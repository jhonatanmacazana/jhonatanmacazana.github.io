import { Img } from "@chakra-ui/react";
import { ReactNode } from "react";

import icons from "#root/helpers/icons";

type IconProps = {
  children: string & ReactNode;
  className?: string;
  key?: string;
  white?: boolean;
};

const Icon = ({ children: icon, className, white }: IconProps) => {
  const name = `${icon.toLowerCase()}${white ? "White" : ""}`;

  const src = icons?.[name];

  if (!src) return null;

  return <Img alt={icon} className={className} marginRight="1rem" src={src} title={icon} />;
};

export default Icon;
