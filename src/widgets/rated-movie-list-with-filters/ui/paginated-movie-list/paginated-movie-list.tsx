import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./paginated-movie-list.module.scss";
import { memo } from "react";
import { Grid, GridCol, Stack } from "@mantine/core";
import { MovieCardSize } from "@/entities/movie/ui/movie-card/movie-card";
import { Pagination } from "@/shared/ui/pagination";
import { MovieRatingCard } from "@/features/movie-rating";
import { usePaginationPage } from "@/app/providers/PaginationPageProvider";
import { useRatedMoviesChunk } from "../../hooks/use-rated-movies-chunk";
import { NoFilteredMoviesScreen } from "../no-filtered-movies-screen/no-filtered-movies-screen";

interface PaginatedMovieListProps {
  className?: string;
}

const moviesPerPage = 4;

export const PaginatedMovieList = memo((props: PaginatedMovieListProps) => {
  const { className, ...otherProps } = props;

  const { page, setPage } = usePaginationPage();
  const { movies, totalPages, areMoviesFilteredAfterInit } =
    useRatedMoviesChunk(moviesPerPage);

  if (!movies.length && areMoviesFilteredAfterInit) {
    return <NoFilteredMoviesScreen />;
  }

  return (
    <Stack
      gap={"1.5rem"}
      className={classNames(cls.paginatedMovieList, {}, [className])}
      {...otherProps}
    >
      <Grid className={cls.list} gutter={"1rem"}>
        {movies.map((movie) => (
          <GridCol span={6} key={movie.id}>
            <MovieRatingCard
              isTitleLink={true}
              className={cls.movieCard}
              size={MovieCardSize.M}
              key={movie.id}
              {...movie}
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
