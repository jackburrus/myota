import { ThemeProvider } from "@shopify/restyle";
import React from "react";

import Screens from "./src/screens/Screens";
import Box from "./src/theme/Box";
import PrimaryTheme from "./src/theme/PrimaryTheme";
import Text from "./src/theme/Text";

function App() {
  return (
    <Box flex={1} justifyContent={"center"} alignItems="center">
      <Text>Hello World</Text>
    </Box>
  );
}

const Root = () => {
  return (
    <ThemeProvider theme={PrimaryTheme}>
      <Screens />
    </ThemeProvider>
  );
};

export default Root;
