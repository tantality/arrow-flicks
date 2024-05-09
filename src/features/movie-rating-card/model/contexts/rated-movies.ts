import { createContext, Dispatch } from "react";
import { RatedMovie, RatedMoviesActions } from "../../types/movie-rating-card";

export interface RatedMoviesState {
  movies: RatedMovie[];
}

export const RatedMoviesContext = createContext<RatedMoviesState | null>(null);
export const RatedMoviesDispatchContext =
  createContext<Dispatch<RatedMoviesActions> | null>(null);
