import { MovieSortByValues } from "@/features/movie-sort-by-dropdown";
import { QueryParam } from "@/pages/api/proxy/types/common";

const sortByValues = Object.values(MovieSortByValues);

export const validateSortBy = (sortBy: QueryParam): string | null => {
  if (!sortBy) {
    return null;
  }

  const isSortByValid = sortByValues.find((value) => value === sortBy);

  if (!isSortByValid) {
    return "sort by must correspond to one of default values";
  }

  return null;
};
