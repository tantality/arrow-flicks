import { MovieFiltersActionTypes } from "../../types/movie-filters";


export interface ResetFilters {
  type: MovieFiltersActionTypes.ResetFilters;
}

export const resetFiltersAction = (
): ResetFilters => ({
  type: MovieFiltersActionTypes.ResetFilters,
});
