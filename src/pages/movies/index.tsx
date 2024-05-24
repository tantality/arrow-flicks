import { Sidebar } from "@/widgets/sidebar";
import { Stack, Title } from "@mantine/core";
import {
  MovieFilters,
  MovieListWithFiltersProvider,
  PaginatedMovieList,
} from "@/widgets/movie-list-with-filters";
import { Header } from "@/widgets/header";
import { HeaderSidebarLayout } from "@/widgets/layouts";

const Movies = () => {
  const content = (
    <Stack gap={"2.5rem"} style={{ paddingBottom: "42px" }}>
      <Title order={1}>Movies</Title>
      <Stack gap={"1.5rem"}>
        <MovieFilters />
        <PaginatedMovieList />
      </Stack>
    </Stack>
  );

  return (
    <MovieListWithFiltersProvider>
      <HeaderSidebarLayout
        header={<Header />}
        sidebar={<Sidebar />}
        content={content}
      />
    </MovieListWithFiltersProvider>
  );
};

export default Movies;
