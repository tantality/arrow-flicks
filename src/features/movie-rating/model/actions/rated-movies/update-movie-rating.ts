import { RatedMoviesActionTypes, RatedMovie } from "../../../types/movie-rating";

export interface UpdateMovieRating {
  type: RatedMoviesActionTypes.UpdateMovieRating;
  payload: RatedMovie;
}

export const updateMovieRatingAction = (
  payload: RatedMovie
): UpdateMovieRating => ({
  type: RatedMoviesActionTypes.UpdateMovieRating,
  payload,
});
