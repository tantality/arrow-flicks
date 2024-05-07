import { Dispatch, useContext } from "react";
import { MovieGenresContextDispatchContext } from "../model/contexts/movie-genres.context";
import { MovieGenreActions } from "../model/types/movie-genre";

export const useMovieGenresDispatch = () =>
  useContext(MovieGenresContextDispatchContext) as Dispatch<MovieGenreActions>;
