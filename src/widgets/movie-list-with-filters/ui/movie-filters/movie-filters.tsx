import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./movie-filters.module.scss";
import { memo } from "react";
import { MovieGenreDropdown } from "@/entities/movie-genre";
import { MovieReleaseYearDropdown } from "@/features/movie-release-year-dropdown";
import { Group, Stack } from "@mantine/core";
import { InputWrapper } from "@/shared/ui/form/input-wrapper";
import { NumberInput } from "@/shared/ui/form/number-input";
import { TextButton } from "@/shared/ui/text-button";
import { MovieSortByDropdown } from "@/features/movie-sort-by-dropdown";
import { useMovieFilters } from "../../hooks/use-movie-filters";
import { MovieFiltersYup } from "../../model/validations/movie-filters-schema";

interface MovieFiltersProps {
  className?: string;
}

export const MovieFilters = memo((props: MovieFiltersProps) => {
  const { className, ...otherProps } = props;

  const {
    data,
    control,
    clientValidationErrors,
    resetFilters,
    setGenreId,
    setReleaseYear,
    setFromRating,
    setSortBy,
    setToRating,
    areFiltersEmpty,
  } = useMovieFilters();

  return (
    <Stack
      gap={"1.5rem"}
      className={classNames(cls.movieFilters, {}, [className])}
    >
      <Group
        className={classNames(cls.filters)}
        align="flex-end"
        {...otherProps}
      >
        <MovieGenreDropdown<MovieFiltersYup>
          className={cls.genreDropdown}
          value={data.genreId}
          onChange={setGenreId}
          name="genreId"
          control={control}
          error={clientValidationErrors.genreId?.message}
        />
        <MovieReleaseYearDropdown<MovieFiltersYup>
          className={cls.releaseYearDropdown}
          value={data.releaseYear}
          onChange={setReleaseYear}
          name="releaseYear"
          control={control}
          error={clientValidationErrors.releaseYear?.message}
        />
        <Stack className={cls.ratingInputs} gap={16}>
          <InputWrapper id="rating-inputs" label="Ratings">
            <Group className="rating-inputs" gap={8}>
              <NumberInput<MovieFiltersYup>
                control={control}
                name="fromRating"
                className={cls.ratingInput}
                placeholder="From"
                id="input-demo"
                value={data.fromRating}
                onChange={setFromRating}
                error={clientValidationErrors.fromRating?.message}
              />
              <NumberInput<MovieFiltersYup>
                className={cls.ratingInput}
                placeholder="To"
                id="input-demo"
                name="toRating"
                control={control}
                value={data.toRating}
                onChange={setToRating}
                error={clientValidationErrors.toRating?.message}
              />
            </Group>
          </InputWrapper>
        </Stack>
        <TextButton onClick={resetFilters} disabled={areFiltersEmpty}>
          Reset filters
        </TextButton>
      </Group>
      <MovieSortByDropdown<MovieFiltersYup>
        className={cls.sortByDropdown}
        value={data.sortBy}
        onChange={setSortBy}
        name="sortBy"
        control={control}
        error={clientValidationErrors.sortBy?.message}
      />
    </Stack>
  );
});
