import { Box } from "@chakra-ui/react";

type FallbackProps = {
  text?: string;
};

const Fallback = ({ text = "Sin contenido" }: FallbackProps) => {
  return <Box>{text}</Box>;
};

export default Fallback;
