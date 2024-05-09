import { RatedMoviesActionTypes, RatedMovie } from "../../../types/movie-rating-card";

export interface RemoveMovieRating {
  type: RatedMoviesActionTypes.RemoveMovieRating;
  payload: Pick<RatedMovie, "id">["id"];
}

export const removeMovieRatingAction = (
  payload: Pick<RatedMovie, "id">["id"]
): RemoveMovieRating => ({
  type: RatedMoviesActionTypes.RemoveMovieRating,
  payload,
});
