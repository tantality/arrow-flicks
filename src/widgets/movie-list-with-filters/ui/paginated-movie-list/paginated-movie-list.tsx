import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./paginated-movie-list.module.scss";
import { memo, useState } from "react";
import { Stack } from "@mantine/core";
import { useMovieFilters } from "../../hooks/use-movie-filters";
import { useMoviesQuery } from "../../api/use-movies-query";
import { MovieCard } from "@/entities/movie";
import { MovieCardSize } from "@/entities/movie/ui/movie-card/movie-card";
import {
  getMovieGenreValuesByIds,
  useMovieGenres,
} from "@/entities/movie-genre";
import { Pagination } from "@/shared/ui/pagination";

interface PaginatedMovieListProps {
  className?: string;
}

export const PaginatedMovieList = memo((props: PaginatedMovieListProps) => {
  const { className, ...otherProps } = props;
  const [page, setPage] = useState<number>(1);

  const { data: filters } = useMovieFilters();

  const { data } = useMoviesQuery(filters, page);

  const genres = useMovieGenres();

  if (!data) {
    return "";
  }

  return (
    <Stack
      gap={"1.5rem"}
      className={classNames(cls.paginatedMovieList, {}, [className])}
      {...otherProps}
    >
      <div className={cls.list}>
        {data.results.map((movie) => (
          <MovieCard
            size={MovieCardSize.M}
            {...movie}
            key={movie.id}
            genres={getMovieGenreValuesByIds(movie.genre_ids, genres)}
            release_date={movie.release_date as unknown as string}
          />
        ))}
      </div>
      <Pagination
        className={cls.pagination}
        total={data.total_pages}
        value={page}
        onChange={setPage}
      />
    </Stack>
  );
});
