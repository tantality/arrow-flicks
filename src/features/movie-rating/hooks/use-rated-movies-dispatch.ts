import { Dispatch, useContext } from "react";
import { RatedMoviesDispatchContext } from "../model/contexts/rated-movies";
import { RatedMoviesActions } from "../types/movie-rating";

export const useRatedMoviesDispatch = () =>
  useContext(RatedMoviesDispatchContext) as Dispatch<RatedMoviesActions>;