import { AppRoutes, getMoviesRoute, getRatedMoviesRoute } from "@/shared/const/router";

type Routes = Exclude<keyof typeof AppRoutes, "MOVIE_DETAILS" | "NOT_FOUND">;

export const SidebarRoutes: Record<Routes, string> = {
  MOVIES: getMoviesRoute(),
  RATED_MOVIES: getRatedMoviesRoute(),
};

export interface SidebarTabItem {
  label: string;
  value: string;
}
