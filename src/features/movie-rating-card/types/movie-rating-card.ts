import { RemoveMovieRating } from "../model/actions/rated-movies/remove-movie-rating";
import { UpdateMovieRating } from "../model/actions/rated-movies/update-movie-rating";

export interface RatedMovie {
  id: number;
  original_title: string;
  release_date: string;
  poster_path: string;
  vote_average?: number;
  vote_count?: number;
  genres?: string[];
  budget?: number;
  revenue?: number;
  runtime?: number;

  rating?: number;
}

export enum RatedMoviesActionTypes {
  UpdateMovieRating = "update-movie-rating",
  RemoveMovieRating = "remove-movie-rating",
}

export type RatedMoviesActions = UpdateMovieRating | RemoveMovieRating;
