import icons from "#root/helpers/icons";

import { IconWrapper } from "./Icon.styles";

interface IconProps {
  children: string;
  className?: string;
  key?: string;
  white?: boolean;
}

const Icon: React.FC<IconProps> = ({ children: icon, className, white }) => {
  const name = `${icon.toLowerCase()}${white ? "White" : ""}`;

  const src = icons?.[name];

  if (!src) return null;

  return (
    <IconWrapper className={className} title={icon} src={src} alt={icon} />
  );
};

export default Icon;
