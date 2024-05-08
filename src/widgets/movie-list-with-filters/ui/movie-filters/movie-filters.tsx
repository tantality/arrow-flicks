import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./movie-filters.module.scss";
import { memo, useState } from "react";
import { MovieGenreDropdown } from "@/entities/movie-genre";
import { MovieReleaseYearDropdown } from "@/features/movie-release-year-dropdown";
import { Group, Stack } from "@mantine/core";
import { InputWrapper } from "@/shared/ui/form/input-wrapper";
import { NumberInput } from "@/shared/ui/form/number-input";
import { TextButton } from "@/shared/ui/text-button";
import { MovieSortByDropdown } from "@/features/movie-sort-by-dropdown";

interface MovieFiltersProps {
  className?: string;
}

export const MovieFilters = memo((props: MovieFiltersProps) => {
  const { className, ...otherProps } = props;

  const [releaseYear, setReleaseYear] = useState<string | null>();
  const [genre, setGenre] = useState<string | null>();
  const [sortBy, setSortBy] = useState<string | null>("revenue.asc");
  const [fromRating, setFromRating] = useState<string | number>();
  const [toRating, setToRating] = useState<string | number>();

  return (
    <Stack gap={"1.5rem"}>
      <Group
        className={classNames(cls.movieFilters, {}, [className])}
        style={{ marginTop: "40px" }}
        {...otherProps}
      >
        <MovieGenreDropdown value={genre} onChange={setGenre} />
        <MovieReleaseYearDropdown
          value={releaseYear}
          onChange={setReleaseYear}
        />
        <Stack className={cls.rating} gap={16}>
          <InputWrapper id="rating-inputs" label="Ratings">
            <Group className="rating-inputs" gap={8}>
              <NumberInput
                placeholder="From"
                id="input-demo"
                min={0}
                max={10}
                value={fromRating}
                onChange={setFromRating}
              />
              <NumberInput
                placeholder="To"
                id="input-demo"
                min={0}
                max={10}
                value={toRating}
                onChange={setToRating}
              />
            </Group>
          </InputWrapper>
        </Stack>
        <TextButton>Reset filters</TextButton>
      </Group>
      <MovieSortByDropdown value={sortBy} onChange={setSortBy} />
    </Stack>
  );
});
