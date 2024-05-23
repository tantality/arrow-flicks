import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./paginated-movie-list.module.scss";
import { memo, useContext } from "react";
import { Stack } from "@mantine/core";
import { useMovieFilters } from "../../hooks/use-movie-filters";
import { useMoviesQuery } from "../../api/use-movies-query";
import { Pagination } from "@/shared/ui/pagination";
import { MAX_PAGE_AMOUNT } from "@/shared/const/api";
import { usePaginationPage } from "@/app/providers/PaginationPageProvider";
import { NoFilteredMoviesScreen } from "../no-filtered-movies-screen/no-filtered-movies-screen";
import { MovieList } from "../movie-list/movie-list";
import { useScrollToTopOnPageChange } from "@/shared/hooks/use-scroll-to-top-on-page-change";
import { DefaultErrorScreen } from "@/features/message-screen";
import { queryClientContext } from "@/app/providers/ReactQueryProvider/ui/ReactQueryProvider";

interface PaginatedMovieListProps {
  className?: string;
}

export const PaginatedMovieList = memo((props: PaginatedMovieListProps) => {
  const { className, ...otherProps } = props;

  const { page, setPage } = usePaginationPage();
  const { data, isLoading, isSuccess, error } = useMoviesQuery();
  const { areThereValidationErrors } = useMovieFilters();

  useScrollToTopOnPageChange(page);

  const areThereNoResults = data && !data.results.length && !isLoading;

  if (areThereNoResults || areThereValidationErrors) {
    return <NoFilteredMoviesScreen />;
  }

  if (error) {
    return <DefaultErrorScreen />;
  }

  let totalPages;
  if (data) {
    totalPages =
      data.total_pages > MAX_PAGE_AMOUNT ? MAX_PAGE_AMOUNT : data.total_pages;
  } else {
    totalPages = 0;
  }

  return (
    <Stack
      gap={"1.5rem"}
      className={classNames(cls.paginatedMovieList, {}, [className])}
      {...otherProps}
    >
      <MovieList isLoading={isLoading} movies={data?.results} />
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
