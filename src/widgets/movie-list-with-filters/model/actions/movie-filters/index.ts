import { resetFiltersAction } from "./reset-filters";
import { setFromRatingAction } from "./set-from-rating";
import { setGenreAction } from "./set-genre";
import { setReleaseYearAction } from "./set-release-year";
import { setSortByAction } from "./set-sort-by";
import { setToRatingAction } from "./set-to-rating";

export const movieFiltersActions = {
  setGenreAction,
  setReleaseYearAction,
  setFromRatingAction,
  setToRatingAction,
  setSortByAction,
  resetFiltersAction
};
