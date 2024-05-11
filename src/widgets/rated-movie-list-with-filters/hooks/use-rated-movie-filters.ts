import { ChangeEvent, MouseEvent, useCallback, useContext } from "react";
import {
  RatedMovieFiltersContext,
  RatedMovieFiltersState,
} from "../model/contexts/rated-movie-filters";
import { useRatedMovieFiltersDispatch } from "./use-rated-movie-filters-dispatch";
import { ratedMovieFiltersActions } from "../model/actions/movie-filters";
import { usePaginationPage } from "@/app/providers/PaginationPageProvider";

interface UseRatedMovieFiltersType {
  filters: RatedMovieFiltersState;
  setTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  resetFilters: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const useRatedMovieFilters = (): UseRatedMovieFiltersType => {
  const filters = useContext(
    RatedMovieFiltersContext
  ) as RatedMovieFiltersState;
  const dispatch = useRatedMovieFiltersDispatch();
  const { setPage } = usePaginationPage();

  const setTitle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(ratedMovieFiltersActions.setTitleAction(e.target.value));
  };

  const resetFilters = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    dispatch(ratedMovieFiltersActions.resetFiltersAction());
    setPage(1);
  }, []);


  return {
    filters,
    setTitle,
    resetFilters,
  };
};
