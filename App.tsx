import { ThemeProvider } from "@shopify/restyle";
import React from "react";
import {
  Hind_300Light,
  Hind_400Regular,
  Hind_500Medium,
  Hind_600SemiBold,
  Hind_700Bold,
  useFonts,
} from "@expo-google-fonts/hind";
import AppLoading from "expo-app-loading";

import Screens from "./src/screens/Screens";
import PrimaryTheme from "./src/theme/PrimaryTheme";

const Root = () => {
  const [fontsLoaded] = useFonts({
    Hind_400Regular,
    Hind_600SemiBold,
    Hind_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={PrimaryTheme}>
        <Screens />
      </ThemeProvider>
    );
  }
};

export default Root;
