import { MovieGenreDto, MovieGenresActionTypes } from "../../types/movie-genre";

export interface SetGenres {
  type: MovieGenresActionTypes.SetGenres;
  payload: MovieGenreDto[] | undefined;
}

export const setGenresAction = (
  payload: MovieGenreDto[] | undefined
): SetGenres => ({
  type: MovieGenresActionTypes.SetGenres,
  payload,
});
