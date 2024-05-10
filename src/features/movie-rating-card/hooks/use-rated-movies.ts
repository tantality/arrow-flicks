import { useContext, useMemo } from "react";
import {
  RatedMoviesContext,
  RatedMoviesState,
} from "../model/contexts/rated-movies";
import { RatedMovie } from "../types/movie-rating-card";
import { usePaginationPage } from "@/app/providers/PaginationPageProvider";
import { calculatePageCount } from "@/shared/lib/calculate-page-count";
import { getDataChunk } from "@/shared/lib/get-data-chunk";

interface UseRatedMoviesType {
  movies: RatedMovie[];
  totalPages: number;
}

export const useRatedMovies = (
  itemsPerPage: number,
  movieTitle?: string
): UseRatedMoviesType => {
  const { movies } = useContext(RatedMoviesContext) as RatedMoviesState;
  const { page } = usePaginationPage();

  const moviesToSplit = useMemo(
    () => (movieTitle ? findMoviesByTitle(movies, movieTitle) : movies),
    [movies, movieTitle]
  );

  const movieChunk = useMemo(
    () => getDataChunk(moviesToSplit, itemsPerPage, page),
    [moviesToSplit, itemsPerPage, page]
  );

  const totalPages = useMemo(
    () => calculatePageCount(moviesToSplit.length, itemsPerPage),
    [moviesToSplit]
  );

  return { movies: movieChunk, totalPages };
};

const findMoviesByTitle = (movies: RatedMovie[], title?: string) => {
  if (!title) {
    return [];
  }

  return movies.filter((movie) =>
    movie.original_title.toLowerCase().includes(title.toLowerCase())
  );
};
