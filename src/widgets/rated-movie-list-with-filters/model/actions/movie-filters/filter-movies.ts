import { RatedMovieFiltersActionTypes } from "../../types/rated-movie-filters";

export interface FilterMovies {
  type: RatedMovieFiltersActionTypes.FilterMovies;
  payload: boolean;
}

export const filterRatedMoviesAction = (payload:boolean
): FilterMovies => ({
  type: RatedMovieFiltersActionTypes.FilterMovies,
  payload
});
