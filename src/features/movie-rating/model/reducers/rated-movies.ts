import { LocalStorageKeys } from "@/shared/const/local-storage";
import {
  RatedMoviesActionTypes,
  RatedMoviesActions,
} from "../../types/movie-rating";
import { RatedMoviesState } from "../contexts/rated-movies";

export function ratedMoviesReducer(
  state: RatedMoviesState,
  action: RatedMoviesActions
): RatedMoviesState {
  switch (action.type) {
    case RatedMoviesActionTypes.UpdateMovieRating: {
      const movieToUpdate = action.payload;
      const moviesWithoutMovieFromPayload = state.movies.filter(
        (movie) => movie.id !== movieToUpdate.id
      );
      const updatedMovies = [...moviesWithoutMovieFromPayload, movieToUpdate];

      localStorage.setItem(
        LocalStorageKeys.RatedMovies,
        JSON.stringify(updatedMovies)
      );

      return { ...state, movies: updatedMovies };
    }

    case RatedMoviesActionTypes.RemoveMovieRating: {
      const movieIdOfMovieToRemove = action.payload;
      const moviesWithoutMovieToRemove = state.movies.filter(
        (movie) => movie.id !== movieIdOfMovieToRemove
      );

      localStorage.setItem(
        LocalStorageKeys.RatedMovies,
        JSON.stringify(moviesWithoutMovieToRemove)
      );

      return { ...state, movies: moviesWithoutMovieToRemove };
    }
    case RatedMoviesActionTypes.InitMovieRatingState: {
      const lsMovies = JSON.parse(
        localStorage.getItem(LocalStorageKeys.RatedMovies) ?? "[]"
      );
      return { ...state, movies: lsMovies, isInit: true };
    }
  }
}
