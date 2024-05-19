import { movieReleaseYearDropdownOptions } from "@/features/movie-release-year-dropdown";
import { MovieSortByValues } from "@/features/movie-sort-by-dropdown";
import * as Yup from "yup";

const releaseYears = movieReleaseYearDropdownOptions.map(
  (option) => option.value
);

export const movieFiltersSchema = Yup.object().shape({
  genreId: Yup.string()
  .matches(/^[0-9]+$/, "genreId must be a number")
  .optional()
  .nullable(),
  releaseYear: Yup.string()
    .matches(/^[0-9]+$/, "releaseYear must be a number")
    .optional()
    .nullable()
    .oneOf(releaseYears),
  sortBy: Yup.string().oneOf(Object.values(MovieSortByValues)),
  fromRating: Yup.number()
    .optional()
    .transform((value) => (Number.isNaN(value) ? undefined : value))
    .min(0, "from value must be grater than or equal to 0")
    .max(10, "from value must be less than or equal to 10"),
  toRating: Yup.number()
    .optional()
    .transform((value) => (Number.isNaN(value) ? undefined : value))
    .when("fromRating", ([fromRating], schema) => {
      const fromRatingAsNumber = Number(fromRating)
      const isFromRatingNumber = !isNaN(fromRatingAsNumber);
      const isFromRatingValidNumber =  isFromRatingNumber && fromRatingAsNumber>=0 && fromRatingAsNumber<=10;

      if (isFromRatingValidNumber) {
        return schema.min(
          fromRating,
          "to value must be grater than or equal to from value"
        );
      } else
        return schema.min(0, "to value must be grater than or equal to 0");
    })
    .max(10, "to value must be less than or equal to 10"),
});

export type MovieFiltersYup = Yup.InferType<typeof movieFiltersSchema>;
export type MovieFiltersFields = keyof MovieFiltersYup; 
export type MovieFiltersErrors = Partial<Record<MovieFiltersFields, string>>
