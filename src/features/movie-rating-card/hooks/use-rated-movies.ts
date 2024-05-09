import { useContext } from "react";
import {
  RatedMoviesContext,
  RatedMoviesState,
} from "../model/contexts/rated-movies";
import { RatedMovie } from "../types/movie-rating-card";

interface UseRatedMoviesType {
  movies: RatedMovie[];
}

export const useRatedMovies = (): UseRatedMoviesType => {
  const { movies } = useContext(RatedMoviesContext) as RatedMoviesState;

  return { movies };
};
