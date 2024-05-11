import { usePaginationPage } from "@/app/providers/PaginationPageProvider";
import { useEffect, useMemo, useState } from "react";
import { useRatedMovieFilters } from "./use-rated-movie-filters";
import { ratedMovieFiltersActions } from "../model/actions/movie-filters";
import { useRatedMovieFiltersDispatch } from "./use-rated-movie-filters-dispatch";
import { getDataChunk } from "@/shared/lib/get-data-chunk";
import { calculatePageCount } from "@/shared/lib/calculate-page-count";
import { RatedMovie, useRatedMovies } from "@/features/movie-rating";

interface UseRatedMoviesType {
  movies: RatedMovie[];
  totalPages: number;
}

export const useRatedMoviesChunk = (
  itemsPerPage: number
): UseRatedMoviesType => {
  const { movies, isInit } = useRatedMovies();
  const [filteredMovies, setFilteredMovies] = useState(movies);
  
  const dispatch = useRatedMovieFiltersDispatch();
  const { page, setPage } = usePaginationPage();
  const { filters } = useRatedMovieFilters();

  useEffect(() => {
    setFilteredMovies(movies);
  }, [isInit]);

  useEffect(() => {
    if (filters.toFilter) {
      const title = filters.title;
      const moviesToFilter = title
        ? findMoviesByTitle(movies, filters.title)
        : movies;

      setFilteredMovies(moviesToFilter);
      dispatch(ratedMovieFiltersActions.filterRatedMoviesAction(false));
      setPage(1);
    }
  }, [filters.toFilter]);

  const movieChunk = useMemo(
    () => getDataChunk(filteredMovies, itemsPerPage, page),
    [filteredMovies, itemsPerPage, page]
  );

  const totalPages = useMemo(
    () => calculatePageCount(filteredMovies.length, itemsPerPage),
    [filteredMovies, itemsPerPage]
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
