import { ReactNode } from "react";
import { MovieFiltersProvider } from "./movie-filters-provider";
import { MovieGenreProvider } from "@/entities/movie-genre";
import { RatedMoviesProvider } from "@/features/movie-rating";

interface MovieListWithFiltersProviderProps {
  children: ReactNode;
}

export function MovieListWithFiltersProvider({
  children,
}: MovieListWithFiltersProviderProps) {
  return (
    <MovieGenreProvider>
      <RatedMoviesProvider>
        <MovieFiltersProvider>{children}</MovieFiltersProvider>
      </RatedMoviesProvider>
    </MovieGenreProvider>
  );
}
