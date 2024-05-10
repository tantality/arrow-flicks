import cls from "./movies-page.module.scss";
import { Sidebar } from "@/widgets/sidebar";
import { Stack, Title } from "@mantine/core";
import {
  MovieFilters,
  MovieListWithFiltersProvider,
  PaginatedMovieList,
} from "@/widgets/movie-list-with-filters";

const Movies = () => {
  return (
    <MovieListWithFiltersProvider>
      <div className={cls.app}>
        <div className={cls.appContainer}>
          <Sidebar className={cls.appSidebar} />
          <div className={cls.appPage}>
            <div className={cls.pageContainer}>
              <Stack gap={"2.5rem"}>
                <Title order={1}>Movies</Title>
                <Stack gap={"1.5rem"}>
                  <MovieFilters />
                  <PaginatedMovieList />
                </Stack>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </MovieListWithFiltersProvider>
  );
};

export default Movies;
