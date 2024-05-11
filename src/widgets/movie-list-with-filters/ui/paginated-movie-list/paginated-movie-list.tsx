import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./paginated-movie-list.module.scss";
import { memo, useState } from "react";
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

interface PaginatedMovieListProps {
  className?: string;
}

export const PaginatedMovieList = memo((props: PaginatedMovieListProps) => {
  const { className, ...otherProps } = props;

  const { page, setPage } = usePaginationPage();
  const { data: filters } = useMovieFilters();
  const { data } = useMoviesQuery(filters);
  const genres = useMovieGenres();

  if (!data) {
    return "";
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
          <GridCol span={6} key={movie.id}>
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
