import { createBox } from "@shopify/restyle";
import { ScrollView } from "react-native";

import { Theme } from "./PrimaryTheme";

export const CustomScrollView = createBox<
  Theme,
  React.ComponentProps<typeof ScrollView>
>(ScrollView);
