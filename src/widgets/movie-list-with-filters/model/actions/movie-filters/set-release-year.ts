import { MovieFiltersActionTypes } from "../../types/movie-filters";

export interface SetReleaseYear {
  type: MovieFiltersActionTypes.SetReleaseYear;
  payload?: string | null;
}

export const setReleaseYearAction = (
  payload?: string | null
): SetReleaseYear => ({
  type: MovieFiltersActionTypes.SetReleaseYear,
  payload,
});
