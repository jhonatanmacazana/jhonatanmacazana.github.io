// import { ChakraProvider, CSSReset } from "@chakra-ui/core";
// import { addDecorator } from "@storybook/react";
// import React from "react";

import theming from "#root/config/theming";

// addDecorator(storyFn => (
//   <ChakraProvider theme={theming}>
//     <CSSReset />
//     {storyFn()}
//   </ChakraProvider>
// ));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  chakra: {
    theme: theming,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    query: {
      foo: "this-is-a-global-override",
    },
  },
};
