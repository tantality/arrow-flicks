import { RatedMovieFiltersActionTypes } from "../../types/rated-movie-filters";

export interface ResetFilters {
  type: RatedMovieFiltersActionTypes.ResetFilters;
}

export const resetFiltersAction = (
): ResetFilters => ({
  type: RatedMovieFiltersActionTypes.ResetFilters,
});
