import { MovieFiltersActionTypes } from "../../types/movie-filters";

export interface SetGenre {
  type: MovieFiltersActionTypes.SetGenre;
  payload?: string | null;
}

export const setGenreAction = (
  payload?: string | null
): SetGenre => ({
  type: MovieFiltersActionTypes.SetGenre,
  payload,
});
