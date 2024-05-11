import cls from "./movies-page.module.scss";
import { Sidebar } from "@/widgets/sidebar";
import { Group, Stack, Title } from "@mantine/core";
import {
  MovieFilters,
  PaginatedMovieList,
  RatedMovieListWithFiltersProvider,
} from "@/widgets/rated-movie-list-with-filters";

const RatedMovies = () => {
  return (
    <RatedMovieListWithFiltersProvider>
      <div className={cls.app}>
        <div className={cls.appContainer}>
          <Sidebar className={cls.appSidebar} />
          <div className={cls.appPage}>
            <div className={cls.pageContainer}>
              <Stack gap={"2.5rem"}>
                <Group justify="flex-start" grow>
                  <Title order={1}>Rated movies</Title>
                  <MovieFilters />
                </Group>
                <PaginatedMovieList />
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </RatedMovieListWithFiltersProvider>
  );
};

export default RatedMovies;
