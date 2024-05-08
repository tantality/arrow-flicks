import { ResetFilters } from "../actions/movie-filters/reset-filters";
import { SetFromRating } from "../actions/movie-filters/set-from-rating";
import { SetGenreId } from "../actions/movie-filters/set-genre-id";
import { SetReleaseYear } from "../actions/movie-filters/set-release-year";
import { SetSortBy } from "../actions/movie-filters/set-sort-by";
import { SetToRating } from "../actions/movie-filters/set-to-rating";

export enum MovieFiltersActionTypes {
  SetReleaseYear = "set-release-year",
  SetGenreId = "set-genre-id",
  SetFromRating = "set-from-rating",
  SetToRating = "set-to-rating",
  SetSortBy = "set-sort-by",
  ResetFilters = "reset-filters",
}

export type MovieFiltersActions =
  | SetGenreId
  | SetReleaseYear
  | SetSortBy
  | SetFromRating
  | SetToRating
  | ResetFilters;