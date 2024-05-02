import { createTheme } from "@mantine/core";
import { Inter } from 'next/font/google';
import { lightThemeColors } from "./themes/lightTheme";

const inter = Inter({ subsets: ['latin'] });

export const theme = createTheme({
  fontFamily: inter.style.fontFamily,
  other: {
    lightThemeColors
  },
});