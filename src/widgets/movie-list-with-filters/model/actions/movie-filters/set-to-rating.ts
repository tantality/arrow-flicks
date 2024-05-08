import { MovieFiltersActionTypes } from "../../types/movie-filters";

export interface SetToRating {
  type: MovieFiltersActionTypes.SetToRating;
  payload?: string | number;
}

export const setToRatingAction = (
  payload?: string | number
): SetToRating => ({
  type: MovieFiltersActionTypes.SetToRating,
  payload,
});
