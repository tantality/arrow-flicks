import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import cls from "./rated-movie-list-with-filters.module.scss";
import { useRatedMovies } from "@/features/movie-rating";
import { NoRatedMoviesScreen } from "@/widgets/rated-movie-list-with-filters/ui/no-rated-movies-screen/no-rated-movies-screen";
import { Group, Stack, Title } from "@mantine/core";
import { PaginatedMovieList } from "@/widgets/rated-movie-list-with-filters/ui/paginated-movie-list/paginated-movie-list";
import { MovieFilters } from "@/widgets/rated-movie-list-with-filters/ui/rated-movie-filters/rated-movie-filters";

interface RatedMovieListWithFiltersProps {
  className?: string;
}

export const RatedMovieListWithFilters = memo(
  (props: RatedMovieListWithFiltersProps) => {
    const { className, ...otherProps } = props;

    const { movies, isInit } = useRatedMovies();

    if (!movies.length && isInit) {
      return <NoRatedMoviesScreen />;
    }

    if (!isInit) {
      return null;
    }

    return (
      <Stack
        gap={"2.5rem"}
        className={classNames("", {}, [className])}
        {...otherProps}
      >
        <Group className={cls.header} justify="space-between">
          <Title order={1}>Rated movies</Title>
          <MovieFilters className={cls.filters} />
        </Group>
        <PaginatedMovieList />
      </Stack>
    );
  }
);
