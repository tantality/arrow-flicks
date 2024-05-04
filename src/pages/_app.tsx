import { ThemeProvider } from "@/app/providers/ThemeProvider";
import "@mantine/core/styles.css";
import "@/app/styles/index.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
