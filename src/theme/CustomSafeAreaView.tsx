import { createBox } from "@shopify/restyle";
import { SafeAreaView } from "react-native";

import { Theme } from "./PrimaryTheme";

export const CustomSafeAreaView = createBox<
  Theme,
  React.ComponentProps<typeof SafeAreaView>
>(SafeAreaView);
