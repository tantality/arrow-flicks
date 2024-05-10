import { RatedMoviesActionTypes } from "../../../types/movie-rating-card";

export interface InitMovieRatingState {
  type: RatedMoviesActionTypes.InitMovieRatingState;
}

export const initMovieRatingStateAction = (): InitMovieRatingState => ({
  type: RatedMoviesActionTypes.InitMovieRatingState,
});
