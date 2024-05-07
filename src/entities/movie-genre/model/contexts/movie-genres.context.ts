import { createContext, Dispatch } from "react";
import {  MovieGenreActions, MovieGenreDto } from "../types/movie-genre";

export interface MovieGenresState {
  genres?: MovieGenreDto[];
}

export const MovieGenresContext = createContext<MovieGenresState | null>(null);
export const MovieGenresContextDispatchContext =
  createContext<Dispatch<MovieGenreActions> | null>(null);
