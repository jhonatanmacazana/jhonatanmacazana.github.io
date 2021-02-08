import icons from "./icons";

interface IconProps {
  children: string;
  className?: string;
  key?: string;
  white?: boolean;
}

const Icon: React.FC<IconProps> = ({ children: icon, className, white }) => {
  const name = `${icon.toLowerCase()}${white ? "White" : ""}`;

  const src = icons?.[name];

  if (!src) {
    return null;
  }
  return <img className={className} title={icon} src={src} alt={icon} />;
};

export default Icon;
