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

interface MovieFiltersProps {
  className?: string;
}

export const MovieFilters = memo((props: MovieFiltersProps) => {
  const { className, ...otherProps } = props;

  const {
    data,
    areFiltersEmpty,
    setGenreId,
    setReleaseYear,
    setFromRating,
    setToRating,
    setSortBy,
    resetFilters,
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
        <MovieGenreDropdown
          className={cls.genreDropdown}
          value={data.genreId}
          onChange={setGenreId}
        />
        <MovieReleaseYearDropdown
          className={cls.releaseYearDropdown}
          value={data.releaseYear}
          onChange={setReleaseYear}
        />
        <Stack className={cls.ratingInputs} gap={16}>
          <InputWrapper id="rating-inputs" label="Ratings">
            <Group className="rating-inputs" gap={8}>
              <NumberInput
                className={cls.ratingInput}
                placeholder="From"
                id="input-demo"
                min={0}
                max={10}
                value={data.fromRating}
                onChange={setFromRating}
              />
              <NumberInput
                className={cls.ratingInput}
                placeholder="To"
                id="input-demo"
                min={0}
                max={10}
                value={data.toRating}
                onChange={setToRating}
              />
            </Group>
          </InputWrapper>
        </Stack>
        <TextButton onClick={resetFilters} disabled={areFiltersEmpty}>
          Reset filters
        </TextButton>
      </Group>
      <MovieSortByDropdown
        className={cls.sortByDropdown}
        value={data.sortBy}
        onChange={setSortBy}
      />
    </Stack>
  );
});
