import { ReactNode } from "react";
import { MovieFiltersProvider } from "./movie-filters-provider";
import { MovieGenreProvider } from "@/entities/movie-genre";

interface MovieListWithFiltersProviderProps {
  children: ReactNode;
}

export function MovieListWithFiltersProvider({
  children,
}: MovieListWithFiltersProviderProps) {
  return (
    <MovieGenreProvider>
      <MovieFiltersProvider>{children}</MovieFiltersProvider>
    </MovieGenreProvider>
  );
}
