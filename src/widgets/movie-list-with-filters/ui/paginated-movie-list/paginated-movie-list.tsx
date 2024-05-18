import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./paginated-movie-list.module.scss";
import { memo } from "react";
import { Grid, GridCol, Stack } from "@mantine/core";
import { useMovieFilters } from "../../hooks/use-movie-filters";
import { useMoviesQuery } from "../../api/use-movies-query";
import { MovieCardSize } from "@/entities/movie/ui/movie-card/movie-card";
import {
  getMovieGenreValuesByIds,
  useMovieGenres,
} from "@/entities/movie-genre";
import { Pagination } from "@/shared/ui/pagination";
import { MovieRatingCard } from "@/features/movie-rating";
import { MAX_PAGE_AMOUNT } from "@/shared/const/api";
import { usePaginationPage } from "@/app/providers/PaginationPageProvider";
import { NoFilteredMoviesScreen } from "../no-filtered-movies-screen/no-filtered-movies-screen";

interface PaginatedMovieListProps {
  className?: string;
}

export const PaginatedMovieList = memo((props: PaginatedMovieListProps) => {
  const { className, ...otherProps } = props;

  const { page, setPage } = usePaginationPage();

  const { data, isLoading, isError } = useMoviesQuery();
  const genres = useMovieGenres();

  const { areThereValidationErrors } = useMovieFilters();

  const areThereNoResults = data && !data.results.length && !isLoading;

  if (areThereNoResults || areThereValidationErrors || isError) {
    return <NoFilteredMoviesScreen />;
  }

  if (!data) {
    return null;
  }

  const totalPages =
    data.total_pages > MAX_PAGE_AMOUNT ? MAX_PAGE_AMOUNT : data.total_pages;

  return (
    <Stack
      gap={"1.5rem"}
      className={classNames(cls.paginatedMovieList, {}, [className])}
      {...otherProps}
    >
      <Grid className={cls.list} gutter={"1rem"}>
        {data.results.map((movie) => (
          <GridCol span={{ lg: 6, md: 6, sm: 6, xs: 12 }} key={movie.id}>
            <MovieRatingCard
              isTitleLink={true}
              className={cls.movieCard}
              size={MovieCardSize.M}
              {...movie}
              key={movie.id}
              genres={getMovieGenreValuesByIds(movie.genre_ids, genres)}
            />
          </GridCol>
        ))}
      </Grid>
      {totalPages > 1 ? (
        <Pagination
          className={cls.pagination}
          total={totalPages}
          value={page}
          onChange={setPage}
        />
      ) : null}
    </Stack>
  );
});
