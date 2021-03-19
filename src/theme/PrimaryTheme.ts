import { createTheme } from "@shopify/restyle";

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  black: "#0B0B0B",
  white: "#F0F2F3",

  primaryDark: "#1B2D4B",
  primaryLight: "#25395F",
  accent: "#108CFF",
};

const PrimaryTheme = createTheme({
  colors: {
    primaryDark: palette.primaryDark,
    primaryLight: palette.primaryLight,
    accent: palette.accent,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof PrimaryTheme;
export default PrimaryTheme;
