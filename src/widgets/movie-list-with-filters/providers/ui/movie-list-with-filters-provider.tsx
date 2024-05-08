import { ReactNode } from "react";
import { MovieFiltersProvider } from "./movie-filters-provider";

interface MovieListWithFiltersProviderProps {
  children: ReactNode;
}

export function MovieListWithFiltersProvider({
  children,
}: MovieListWithFiltersProviderProps) {
  return <MovieFiltersProvider>{children}</MovieFiltersProvider>;
}
