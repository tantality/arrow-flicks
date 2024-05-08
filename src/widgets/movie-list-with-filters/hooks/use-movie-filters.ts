import { MouseEventHandler, useCallback, useContext, useMemo } from "react";
import {
  MovieFiltersContext,
  MovieFiltersState,
} from "../model/contexts/movie-filters";
import { useMovieFiltersDispatch } from "./use-movie-filters-dispatch";
import { movieFiltersActions } from "../model/actions/movie-filters";
import { doesObjContainEmptyProperties } from "../lib/does-obj-contain-empty-properties";
import { useDebouncedCallback } from "@mantine/hooks";

interface UseMovieFiltersType {
  data: MovieFiltersState;
  setGenreId: (value: string | null) => void;
  setSortBy: (value: string | null) => void;
  setReleaseYear: (value: string | null) => void;
  setFromRating: (value: string | number) => void;
  setToRating: (value: string | number) => void;
  resetFilters: (e: any) => void;
  areFiltersEmpty: boolean;
}

const delay = 1000;

export const useMovieFilters = (): UseMovieFiltersType => {
  const data = useContext(MovieFiltersContext) as MovieFiltersState;
  const dispatch = useMovieFiltersDispatch();

  const filters = useMemo(() => {
    const { sortBy, ...filters } = data;
    return filters;
  }, [data.genre, data.releaseYear, data.fromRating, data.toRating]);

  const areFiltersEmpty = useMemo(
    () => doesObjContainEmptyProperties(filters),
    [filters]
  );

  const setGenreId = useCallback(
    (value: string | null) =>
      dispatch(movieFiltersActions.setGenreIdAction(value)),
    []
  );

  const setSortBy = useCallback(
    (value: string | null) =>
      dispatch(movieFiltersActions.setSortByAction(value)),
    []
  );

  const setReleaseYear = useDebouncedCallback(
    useCallback(
      (value: string | null) =>
        dispatch(movieFiltersActions.setReleaseYearAction(value)),
      []
    ),
    delay
  );

  const setFromRating = useDebouncedCallback(
    useCallback(
      (value: string | number) =>
        dispatch(movieFiltersActions.setFromRatingAction(value)),
      []
    ),
    delay
  );

  const setToRating = useCallback(
    (value: string | number) =>
      dispatch(movieFiltersActions.setToRatingAction(value)),
    []
  );

  const resetFilters = useCallback(
    (e: MouseEventHandler<HTMLButtonElement>) =>
      dispatch(movieFiltersActions.resetFiltersAction()),
    []
  );

  return {
    data,
    setGenreId,
    setSortBy,
    setReleaseYear,
    setFromRating,
    setToRating,
    resetFilters,
    areFiltersEmpty,
  };
};
