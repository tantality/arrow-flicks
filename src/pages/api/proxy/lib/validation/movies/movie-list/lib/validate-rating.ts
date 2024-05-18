import { QueryParam } from "@/pages/api/proxy/types/common";
import { MovieFiltersErrors } from "@/widgets/movie-list-with-filters";

const MIN_RATING = 0;
const MAX_RATING = 10;

export const validateRatingEdges = (
  fromRating: QueryParam,
  toRating: QueryParam
): Pick<MovieFiltersErrors, "fromRating" | "toRating"> => {
  const fromRatingErrors = validateFromRatingValue(fromRating);
  const toRatingErrors = validateToRatingValue(toRating, fromRating);

  const errorMessages: Pick<MovieFiltersErrors, "fromRating" | "toRating"> = {
    ...(fromRatingErrors ? { fromRating: fromRatingErrors } : undefined),
    ...(toRatingErrors ? { toRating: toRatingErrors } : undefined),
  };

  return errorMessages;
};

const validateFromRatingValue = (fromRating: QueryParam): string | null => {
  if (!fromRating) {
    return null;
  }

  const fromRatingAsNumber = Number(fromRating);
  const isFromRatingNumber = !isNaN(fromRatingAsNumber);

  if (!isFromRatingNumber) {
    return "from value must be a number";
  }

  const fromRatingIsBetween0and10 =
    fromRatingAsNumber >= MIN_RATING && fromRatingAsNumber <= MAX_RATING;

  if (!fromRatingIsBetween0and10) {
    return `from value must be between ${MIN_RATING} and ${MAX_RATING}`;
  }

  return null;
};

const validateToRatingValue = (
  toRating: QueryParam,
  fromRating: QueryParam
): string | null => {
  if (!toRating) {
    return null;
  }

  const fromRatingAsNumber = Number(fromRating);
  const isFromRatingNumber = !isNaN(fromRatingAsNumber);

  const toRatingAsNumber = Number(toRating);
  const isToRatingNumber = !isNaN(toRatingAsNumber);

  if (!isToRatingNumber) {
    return "to value must be a number";
  }

  const toRatingIsBetween0and10 =
    toRatingAsNumber >= MIN_RATING && toRatingAsNumber <= MAX_RATING;

  if (!toRatingIsBetween0and10) {
    return `to value must be between ${MIN_RATING} and ${MAX_RATING}`;
  }

  if (!isFromRatingNumber) {
    return null;
  }

  if (fromRatingAsNumber > toRatingAsNumber) {
    return "to value must be grater than or equal to from value";
  }

  return null;
};
