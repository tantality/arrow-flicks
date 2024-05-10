import { initMovieRatingStateAction } from "./init-movie-rating-state";
import { removeMovieRatingAction } from "./remove-movie-rating";
import { updateMovieRatingAction } from "./update-movie-rating";

export const ratedMoviesActions = {
  updateMovieRatingAction,
  removeMovieRatingAction,
  initMovieRatingStateAction
};
