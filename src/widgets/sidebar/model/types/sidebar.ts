import { AppRoutes, getMoviesRoute, getRatedMoviesRoute } from "@/shared/const/router";

type Routes = Exclude<keyof typeof AppRoutes, "MOVIE_DETAILS">;

export const SidebarRoutes: Record<Routes, string> = {
  MOVIES: getMoviesRoute(),
  RATED_MOVIES: getRatedMoviesRoute(),
};

export interface SidebarTabItem {
  label: string;
  value: string;
}

// const tabItem: SidebarTabItem[] = [
//   { label: "Movies", path: SidebarRoutes.MOVIES },
//   { label: "Rated movies", path: SidebarRoutes.RATED_MOVIES },
// ];