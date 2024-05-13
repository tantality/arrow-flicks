import { resetFiltersAction } from "./reset-filters";
import { setNoFilterResults } from "./set-no-filter-results";
import { setFromRatingAction } from "./set-from-rating";
import { setGenreIdAction } from "./set-genre-id";
import { setReleaseYearAction } from "./set-release-year";
import { setSortByAction } from "./set-sort-by";
import { setToRatingAction } from "./set-to-rating";

export const movieFiltersActions = {
  setGenreIdAction,
  setReleaseYearAction,
  setFromRatingAction,
  setToRatingAction,
  setSortByAction,
  resetFiltersAction,
  setNoFilterResults
};
