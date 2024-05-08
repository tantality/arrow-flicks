import { createContext, Dispatch } from "react";
import {  MovieFiltersActions } from "../types/movie-filters";

export interface MovieFiltersState {
  releaseYear?: string | null;
  genreId?: string | null;
  fromRating?: string | number;
  toRating?: string | number;
  sortBy?: string | null;
}

export const MovieFiltersContext = createContext<MovieFiltersState | null>(null);
export const MovieFiltersDispatchContext =
  createContext<Dispatch<MovieFiltersActions> | null>(null);
