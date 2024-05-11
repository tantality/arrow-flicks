import { useContext } from "react";
import {
  RatedMoviesContext,
  RatedMoviesState,
} from "../model/contexts/rated-movies";

export const useRatedMovies = (): RatedMoviesState => {
  const movies = useContext(RatedMoviesContext) as RatedMoviesState;
  return movies;
};
