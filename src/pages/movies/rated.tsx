import { Sidebar } from "@/widgets/sidebar";
import {
  RatedMovieListWithFilters,
  RatedMovieListWithFiltersProvider,
} from "@/widgets/rated-movie-list-with-filters";
import { HeaderSidebarLayout } from "@/widgets/layouts";
import { Header } from "@/widgets/header";

const RatedMovies = () => {
  return (
    <RatedMovieListWithFiltersProvider>
      <HeaderSidebarLayout
        header={<Header />}
        sidebar={<Sidebar />}
        content={<RatedMovieListWithFilters />}
      />
    </RatedMovieListWithFiltersProvider>
  );
};

export default RatedMovies;
