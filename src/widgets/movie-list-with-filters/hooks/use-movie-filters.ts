import { MouseEvent, useCallback, useContext, useMemo } from "react";
import {
  MovieFiltersContext,
  MovieFiltersState,
} from "../model/contexts/movie-filters";
import { useMovieFiltersDispatch } from "./use-movie-filters-dispatch";
import { movieFiltersActions } from "../model/actions/movie-filters";
import { doesObjContainEmptyProperties } from "../lib/does-obj-contain-empty-properties";
import { useDebouncedCallback } from "@mantine/hooks";
import { usePaginationPage } from "@/app/providers/PaginationPageProvider";

interface UseMovieFiltersType {
  data: MovieFiltersState;
  setGenreId: (value: string | null) => void;
  setSortBy: (value: string | null) => void;
  setReleaseYear: (value: string | null) => void;
  setFromRating: (value: string | number) => void;
  setToRating: (value: string | number) => void;
  resetFilters: (e?: MouseEvent<HTMLButtonElement>) => void;
  dispatchNoFilterResultsAction: () => void;
  areFiltersEmpty: boolean;
}

const delay = 1000;

export const useMovieFilters = (): UseMovieFiltersType => {
  const data = useContext(MovieFiltersContext) as MovieFiltersState;
  const dispatch = useMovieFiltersDispatch();
  const { setPage } = usePaginationPage();

  const filters = useMemo(() => {
    const { sortBy, noFilterResults, ...filters } = data;
    return filters;
  }, [data.genreId, data.releaseYear, data.fromRating, data.toRating]);

  const areFiltersEmpty = useMemo(
    () => doesObjContainEmptyProperties(filters),
    [filters]
  );

  const setGenreId = useCallback(
    (value: string | null) => {
      if (data.noFilterResults) {
        dispatch(movieFiltersActions.setNoFilterResults(false));
      }
      dispatch(movieFiltersActions.setGenreIdAction(value));
      setPage(1);
    },
    [data.noFilterResults]
  );

  const setSortBy = useCallback(
    (value: string | null) => {
      if (data.noFilterResults) {
        dispatch(movieFiltersActions.setNoFilterResults(false));
      }
      dispatch(movieFiltersActions.setSortByAction(value));
      setPage(1);
    },
    [data.noFilterResults]
  );

  const setReleaseYear = useCallback(
    (value: string | null) => {
      if (data.noFilterResults) {
        dispatch(movieFiltersActions.setNoFilterResults(false));
      }
      dispatch(movieFiltersActions.setReleaseYearAction(value));
      setPage(1);
    },
    [data.noFilterResults]
  );

  const setFromRating = useDebouncedCallback(
    useCallback(
      (value: string | number) => {
        if (data.noFilterResults) {
          dispatch(movieFiltersActions.setNoFilterResults(false));
        }
        dispatch(movieFiltersActions.setFromRatingAction(value));
        setPage(1);
      },
      [data.noFilterResults]
    ),
    delay
  );

  const setToRating = useDebouncedCallback(
    useCallback(
      (value: string | number) => {
        if (data.noFilterResults) {
          dispatch(movieFiltersActions.setNoFilterResults(false));
        }
        dispatch(movieFiltersActions.setToRatingAction(value));
        setPage(1);
      },
      [data.noFilterResults]
    ),
    delay
  );

  const resetFilters = useCallback((e?: MouseEvent<HTMLButtonElement>) => {
    dispatch(movieFiltersActions.resetFiltersAction());
    setPage(1);
  }, []);

  const dispatchNoFilterResultsAction = useCallback(() => {
    dispatch(movieFiltersActions.setNoFilterResults(true));
  }, []);

  return {
    data,
    setGenreId,
    setSortBy,
    setReleaseYear,
    setFromRating,
    setToRating,
    resetFilters,
    dispatchNoFilterResultsAction,
    areFiltersEmpty,
  };
};
