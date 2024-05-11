import { RatedMovieFiltersActionTypes } from "../../types/rated-movie-filters";

export interface SetTitle {
  type: RatedMovieFiltersActionTypes.SetTitle;
  payload?: string;
}

export const setTitleAction = (payload?: string): SetTitle => ({
  type: RatedMovieFiltersActionTypes.SetTitle,
  payload,
});
