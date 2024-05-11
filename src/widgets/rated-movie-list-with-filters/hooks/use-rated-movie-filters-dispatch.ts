import { Dispatch, useContext } from "react";
import { RatedMovieFiltersDispatchContext } from "../model/contexts/rated-movie-filters";
import { RatedMovieFiltersActions } from "../model/types/rated-movie-filters";

export const useRatedMovieFiltersDispatch = () =>
  useContext(RatedMovieFiltersDispatchContext) as Dispatch<RatedMovieFiltersActions>;