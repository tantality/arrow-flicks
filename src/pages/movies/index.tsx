import cls from "./movies-page.module.scss";
import { Sidebar } from "@/widgets/sidebar";
import { Stack, Title } from "@mantine/core";
import {
  MovieFilters,
  PaginatedMovieList,
} from "@/widgets/movie-list-with-filters";

const Movies = () => {
  return (
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
  );
};

export default Movies;
