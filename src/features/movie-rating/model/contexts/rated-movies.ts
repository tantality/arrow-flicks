import { createContext, Dispatch } from "react";
import { RatedMovie, RatedMoviesActions } from "../../types/movie-rating";

export interface RatedMoviesState {
  movies: RatedMovie[];
  isInit: boolean;
}

export const RatedMoviesContext = createContext<RatedMoviesState | null>(null);
export const RatedMoviesDispatchContext =
  createContext<Dispatch<RatedMoviesActions> | null>(null);
