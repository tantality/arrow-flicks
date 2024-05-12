export enum AppRoutes {
  MOVIES = "movies",
  MOVIE_DETAILS = "movie",
  RATED_MOVIES = "rated_movies",
}

export const getMoviesRoute = () => '/movies';
export const getMovieDetailsRoute = (id: string | number) => `/movies/${id}`;
export const getRatedMoviesRoute = () => '/movies/rated';

export const AppRoutesByRouteName: Record<AppRoutes, string> = {
  [AppRoutes.MOVIES]: getMoviesRoute(),
  [AppRoutes.MOVIE_DETAILS]: getMovieDetailsRoute(":id"),
  [AppRoutes.RATED_MOVIES]: "/movies/rated",
};
