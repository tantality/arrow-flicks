import { NextApiRequest } from "next";
import { validateReleaseYear } from "./lib/validate-release-year";
import { validateRatingEdges } from "./lib/validate-rating";
import { validateSortBy } from "./lib/validate-sort-by";
import { BadRequestException } from "@/pages/api/proxy/errors/bad-request";
import { MovieFiltersErrors } from "@/widgets/movie-list-with-filters";
import { validateGenreId } from "./lib/validate-genre-id";
import { NextRequest } from "next/server";

export const validateMovieListQueryParams = (
  req: NextRequest
): void => {
  const queryParams = req.nextUrl.searchParams;

  const fromRating = queryParams.get("vote_average.gte");
  const toRating = queryParams.get("vote_average.lte");
  const sortBy = queryParams.get("sort_by");
  const releaseYear = queryParams.get("primary_release_year");
  const genreId = queryParams.get("with_genres[]");

  const sortByErrors = validateSortBy(sortBy);
  const releaseYearErrors = validateReleaseYear(releaseYear);
  const genreIdErrors = validateGenreId(genreId);

  const errorMessages: MovieFiltersErrors = {
    ...validateRatingEdges(fromRating, toRating),
    ...(sortByErrors ? { sortBy: sortByErrors } : undefined),
    ...(releaseYearErrors ? { releaseYear: releaseYearErrors } : undefined),
    ...(genreIdErrors ? { genreId: genreIdErrors } : undefined)
  };

  const areThereErrors = Object.keys(errorMessages).length;

  if (areThereErrors) {
    throw new BadRequestException(errorMessages)
  }
};
