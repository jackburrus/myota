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
  primaryMid: "#213356",
  primaryLight: "#25395F",
  accent: "#108CFF",
  lineColor: "#8699BB",
  successGreen: "#57D087",
  neutralYellow: "#FFC962",
  failureRed: "#FF6755",
};

const PrimaryTheme = createTheme({
  colors: {
    primaryDark: palette.primaryDark,
    primaryMid: palette.primaryMid,
    primaryLight: palette.primaryLight,
    accent: palette.accent,
    lineColor: palette.lineColor,
    white: palette.white,
    successGreen: palette.successGreen,
    neutralYellow: palette.neutralYellow,
    failureRed: palette.failureRed,
  },
  textVariants: {
    title: {
      fontFamily: "Hind_500Medium",
      fontSize: 14,
      color: "lineColor",
      height: 18,
    },
    whiteText: {
      fontFamily: "Hind_600SemiBold",
      fontSize: 16,
      color: "white",
      // height: 20,
    },
  },
  spacing: {
    s: 8,
    sm: 12,
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
