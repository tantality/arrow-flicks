import { useContext } from "react";
import {
  MovieGenresContext,
  MovieGenresState,
} from "../model/contexts/movie-genres.context";
import { MovieGenreDto } from "../model/types/movie-genre";

export const useMovieGenres = (): MovieGenreDto[] | undefined => {
  const { genres } = useContext(MovieGenresContext) as MovieGenresState;
  return genres;
};
