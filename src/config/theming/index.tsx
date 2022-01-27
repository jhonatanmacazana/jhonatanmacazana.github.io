import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { createBreakpoints, GlobalStyles } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

const styles: GlobalStyles = {
  global: () => ({
    body: {
      fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      // color: mode("gray.800", "whiteAlpha.900")(props),
      // bg: mode("white", "gray.800")(props),
      // lineHeight: "base",
    },
  }),
};

const theme = extendTheme({ breakpoints, config, styles });

export default theme;
