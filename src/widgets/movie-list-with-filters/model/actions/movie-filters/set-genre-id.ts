import { MovieFiltersActionTypes } from "../../types/movie-filters";

export interface SetGenreId {
  type: MovieFiltersActionTypes.SetGenreId;
  payload?: string | null;
}

export const setGenreIdAction = (
  payload?: string | null
): SetGenreId => ({
  type: MovieFiltersActionTypes.SetGenreId,
  payload,
});
