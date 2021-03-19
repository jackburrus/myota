import { ThemeProvider } from "@shopify/restyle";
import React from "react";

import Screens from "./src/screens/Screens";
import PrimaryTheme from "./src/theme/PrimaryTheme";

const Root = () => {
  return (
    <ThemeProvider theme={PrimaryTheme}>
      <Screens />
    </ThemeProvider>
  );
};

export default Root;
