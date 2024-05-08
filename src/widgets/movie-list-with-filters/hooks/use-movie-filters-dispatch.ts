import { Dispatch, useContext } from "react";
import { MovieFiltersDispatchContext } from "../model/contexts/movie-filters";
import { MovieFiltersActions } from "../model/types/movie-filters";

export const useMovieFiltersDispatch = () =>
  useContext(MovieFiltersDispatchContext) as Dispatch<MovieFiltersActions>;