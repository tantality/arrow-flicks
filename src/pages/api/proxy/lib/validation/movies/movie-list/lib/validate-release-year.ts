import { QueryParam } from "@/pages/api/proxy/types/common";

const MIN_RELEASE_YEAR = 1874;
const MAX_RELEASE_YEAR = 2115;

export const validateReleaseYear = (releaseYear: QueryParam): string | null => {
  if (!releaseYear) {
    return null;
  }

  const releaseYearAsNumber = Number(releaseYear);
  const isReleaseYearNumber = !isNaN(releaseYearAsNumber);

  if (!isReleaseYearNumber) {
    return "release year must be a number";
  }

  const isReleaseYearBetween1874and2115 =
    releaseYearAsNumber >= MIN_RELEASE_YEAR && releaseYearAsNumber <= MAX_RELEASE_YEAR;

  if (!isReleaseYearBetween1874and2115) {
    return `release year must be between ${MIN_RELEASE_YEAR} and ${MAX_RELEASE_YEAR}`;
  }

  return null;
};
