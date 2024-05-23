import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { determineIfToRetry } from "../lib/determine-if-to-retry";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: determineIfToRetry,
    },
  },
});

interface ReactQueryProviderProps {
  children: ReactNode;
}

const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
