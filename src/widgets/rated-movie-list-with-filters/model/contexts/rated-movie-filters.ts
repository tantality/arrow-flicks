import { createContext, Dispatch } from "react";
import { RatedMovieFiltersActions } from "../types/rated-movie-filters";

export interface RatedMovieFiltersState {
  title?: string;
  toFilter: boolean;
}

export const RatedMovieFiltersContext = createContext<RatedMovieFiltersState | null>(null);
export const RatedMovieFiltersDispatchContext =
  createContext<Dispatch<RatedMovieFiltersActions> | null>(null);
