import { createTheme } from "@mantine/core";
import { Inter } from "next/font/google";
import { lightThemeColors } from "./themes/lightTheme";

const inter = Inter({ subsets: ["latin"] });

export const theme = createTheme({
  fontFamily: inter.style.fontFamily,
  headings: {
    sizes: {
      h1: {
        fontSize: "2rem",
        lineHeight: "140%",
      },
    },
  },
  defaultRadius: "xs",
  radius: {
    xs: "8px",
    sm: "12px",
  },
  other: {
    lightThemeColors,
  },
});
