import { createBox } from "@shopify/restyle";
import { Pressable } from "react-native";

import { Theme } from "./PrimaryTheme";

export const CustomPressable = createBox<
  Theme,
  React.ComponentProps<typeof Pressable>
>(Pressable);
