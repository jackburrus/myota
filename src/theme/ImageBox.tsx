import { createBox } from "@shopify/restyle";
import { Image } from "react-native";

import { Theme } from "./PrimaryTheme";

export const ImageBox = createBox<Theme, React.ComponentProps<typeof Image>>(
  Image
);
