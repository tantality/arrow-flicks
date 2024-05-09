import { useContext, useState, useEffect, useCallback } from "react";
import {
  RatedMoviesContext,
  RatedMoviesState,
} from "../model/contexts/rated-movies";

export const useMovieRating = (movieId: number): number | undefined => {
  const { movies } = useContext(RatedMoviesContext) as RatedMoviesState;

  const getMovieRating = useCallback(
    () => movies.find((movie) => movie.id === movieId)?.rating,
    [movies]
  );
  
  const [movieRating, setMovieRating] = useState<number | undefined>(
    getMovieRating()
  );

  useEffect(() => {
    setMovieRating(getMovieRating());
  }, [movies]);

  return movieRating;
};
