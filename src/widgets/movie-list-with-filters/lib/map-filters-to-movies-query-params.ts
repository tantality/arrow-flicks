import { isValueDefined } from "@/shared/lib/is-value-defined";
import { MoviesQueryParams } from "../model/types/movies";
import { MovieFiltersYup } from "../model/validations/movie-filters-schema";

export const mapFiltersToMoviesQueryParams = (
  filters: MovieFiltersYup,
  page: number
): MoviesQueryParams => {
  const { toRating, fromRating, genreId, releaseYear, sortBy } = filters;

  const isGenreIdValid = isValueDefined(genreId) && !isNaN(Number(genreId));
  const isReleaseYearValid = isValueDefined(releaseYear);
  !isNaN(Number(releaseYear));

  const isSortByValid = isValueDefined(sortBy);
  const isToRatingValid = isValueDefined(toRating);
  !isNaN(Number(toRating));

  const isFromRatingValid = isValueDefined(fromRating);
  !isNaN(Number(fromRating));

  const queryParams = {
    ...(isGenreIdValid && { with_genres: [Number(genreId)] }),
    ...(isReleaseYearValid && { primary_release_year: Number(releaseYear) }),
    ...(isSortByValid && { sort_by: sortBy as string }),
    ...(isFromRatingValid && { "vote_average.gte": Number(fromRating) }),
    ...(isToRatingValid && {
      "vote_average.lte": Number(toRating),
    }),
    page,
  } satisfies MoviesQueryParams;

  return queryParams;
};
