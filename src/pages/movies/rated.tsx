import cls from "./movies-page.module.scss";
import { Sidebar } from "@/widgets/sidebar";
import {
  RatedMovieListWithFilters,
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
              <RatedMovieListWithFilters />
            </div>
          </div>
        </div>
      </div>
    </RatedMovieListWithFiltersProvider>
  );
};

export default RatedMovies;
