import { ReactNode } from "react";
import { RatedMoviesProvider } from "@/features/movie-rating";
import { RatedMovieFiltersProvider } from "./rated-movie-filters-provider";

interface RatedMovieListWithFiltersProviderProps {
  children: ReactNode;
}

export function RatedMovieListWithFiltersProvider({
  children,
}: RatedMovieListWithFiltersProviderProps) {
  return (
    <RatedMoviesProvider>
      <RatedMovieFiltersProvider>{children}</RatedMovieFiltersProvider>
    </RatedMoviesProvider>
  );
}
