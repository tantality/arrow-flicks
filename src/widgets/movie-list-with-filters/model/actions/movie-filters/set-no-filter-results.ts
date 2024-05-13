import { MovieFiltersActionTypes } from "../../types/movie-filters";

export interface SetNoFilterResults {
  type: MovieFiltersActionTypes.SetNoFilterResults;
  payload: boolean;
}

export const setNoFilterResults = (
  payload: boolean
): SetNoFilterResults => ({
  type: MovieFiltersActionTypes.SetNoFilterResults,
  payload,
});
