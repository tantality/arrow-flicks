import { NextApiRequest } from "next";
import { validateReleaseYear } from "./lib/validate-release-year";
import { validateRatingEdges } from "./lib/validate-rating";
import { validateSortBy } from "./lib/validate-sort-by";
import { BadRequestException } from "@/pages/api/proxy/errors/bad-request";
import { MovieFiltersErrors } from "@/widgets/movie-list-with-filters";
import { validateGenreId } from "./lib/validate-genre-id";

export const validateMovieListQueryParams = (
  req: NextApiRequest
): void => {
  const queryParams = req.query;
  const fromRating = queryParams["vote_average.gte"];
  const toRating = queryParams["vote_average.lte"];
  const sortBy = queryParams["sort_by"];
  const releaseYear = queryParams["primary_release_year"];
  const genreId = queryParams["with_genres[]"];

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
