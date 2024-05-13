import { ThemeProvider } from "@/app/providers/ThemeProvider";
import "@mantine/core/styles.css";
import "@/app/styles/index.scss";
import type { AppProps } from "next/app";
import { ReactQueryProvider } from "@/app/providers/ReactQueryProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <ThemeProvider>
        <div className="app">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
