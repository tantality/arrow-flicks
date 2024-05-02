import { FC, ReactNode } from "react";
import { MantineProvider } from "@mantine/core";
import { theme } from "../config/theme";
import { resolver } from "../config/css-variables-resolver";

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
