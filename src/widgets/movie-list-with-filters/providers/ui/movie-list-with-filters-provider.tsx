import { ReactNode } from "react";
import { MovieFiltersProvider } from "./movie-filters-provider";
import { MovieGenreProvider } from "@/entities/movie-genre";
import { RatedMoviesProvider } from "@/features/movie-rating-card";
import { PaginationPageProvider } from "@/app/providers/PaginationPageProvider";

interface MovieListWithFiltersProviderProps {
  children: ReactNode;
}

export function MovieListWithFiltersProvider({
  children,
}: MovieListWithFiltersProviderProps) {
  return (
    <PaginationPageProvider>
      <MovieGenreProvider>
        <RatedMoviesProvider>
          <MovieFiltersProvider>{children}</MovieFiltersProvider>
        </RatedMoviesProvider>
      </MovieGenreProvider>
    </PaginationPageProvider>
  );
}
