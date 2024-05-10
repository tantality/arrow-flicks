import { useContext, useMemo } from "react";
import {
  RatedMoviesContext,
  RatedMoviesState,
} from "../model/contexts/rated-movies";
import { RatedMovie } from "../types/movie-rating";

export const useMovieRating = (movieId: number): number | undefined => {
  const { movies } = useContext(RatedMoviesContext) as RatedMoviesState;

  const movieRating = useMemo(
    () => getMovieRatingById(movies, movieId),
    [movies, movieId]
  );

  return movieRating;
};

const getMovieRatingById = (movies: RatedMovie[], movieId: number) => {
  return movies.find((movie) => movie.id === movieId)?.rating;
};
