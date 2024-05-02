import { FC, ReactNode } from "react";
import { MantineProvider } from "@mantine/core";
import { theme, resolver } from "../config/theme";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
}: ThemeProviderProps) => {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      {children}
    </MantineProvider>
  );
};

export default ThemeProvider;
