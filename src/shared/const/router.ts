import App from "next/app";

export enum AppRoutes {
  MOVIES = "movies",
  MOVIE_DETAILS = "movie",
  RATED_MOVIES = "rated_movies",
  NOT_FOUND = "not_found"
}

export const getMoviesRoute = () => '/movies';
export const getMovieDetailsRoute = (id: string | number) => `/movies/${id}`;
export const getRatedMoviesRoute = () => '/movies/rated';
export const getNotFoundRoute = () => '/404';

export const AppRoutesByRouteName: Record<AppRoutes, string> = {
  [AppRoutes.MOVIES]: getMoviesRoute(),
  [AppRoutes.MOVIE_DETAILS]: getMovieDetailsRoute(":id"),
  [AppRoutes.RATED_MOVIES]: getRatedMoviesRoute(),
  [AppRoutes.NOT_FOUND]: getNotFoundRoute(),
};
