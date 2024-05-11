import { FilterMovies } from "../actions/movie-filters/filter-movies";
import { ResetFilters } from "../actions/movie-filters/reset-filters";
import { SetTitle } from "../actions/movie-filters/set-title";

export enum RatedMovieFiltersActionTypes {
  SetTitle = "set-title",
  ResetFilters = "reset-filters",
  FilterMovies = "filter-movies"
}

export type RatedMovieFiltersActions =
  | SetTitle
  | ResetFilters
  | FilterMovies;
