import { RatedMoviesActionTypes } from "../../../types/movie-rating";

export interface InitMovieRatingState {
  type: RatedMoviesActionTypes.InitMovieRatingState;
}

export const initMovieRatingStateAction = (): InitMovieRatingState => ({
  type: RatedMoviesActionTypes.InitMovieRatingState,
});
