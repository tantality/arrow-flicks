import { MovieFiltersActionTypes } from "../../types/movie-filters";

export interface SetSortBy {
  type: MovieFiltersActionTypes.SetSortBy;
  payload?: string | null;
}

export const setSortByAction = (
  payload?: string | null
): SetSortBy => ({
  type: MovieFiltersActionTypes.SetSortBy,
  payload,
});
