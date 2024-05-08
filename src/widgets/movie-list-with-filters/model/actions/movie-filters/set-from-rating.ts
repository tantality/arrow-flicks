import { MovieFiltersActionTypes } from "../../types/movie-filters";


export interface SetFromRating {
  type: MovieFiltersActionTypes.SetFromRating;
  payload?: string | number;
}

export const setFromRatingAction = (
  payload?: string | number
): SetFromRating => ({
  type: MovieFiltersActionTypes.SetFromRating,
  payload,
});
