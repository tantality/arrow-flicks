import { MovieGenresState } from "../contexts/movie-genres.context";
import { MovieGenreActions, MovieGenresActionTypes } from "../types/movie-genre";

export function movieGenresReducer(
  state: MovieGenresState,
  action: MovieGenreActions
): MovieGenresState {
  switch (action.type) {
    case MovieGenresActionTypes.SetGenres: {
      return { genres: action.payload };
    }
  }
}