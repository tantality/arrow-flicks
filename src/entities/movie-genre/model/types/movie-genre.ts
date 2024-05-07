import { SetGenres, setGenresAction } from "../actions/movie-genres/set-genres";

export interface MovieGenreDto{
  id: number;
  name: string;
}

export interface MovieGenresDto {
  genres: MovieGenreDto[]
}

export enum MovieGenresActionTypes {
  SetGenres = 'set-genres',
}

export type MovieGenreActions = SetGenres;