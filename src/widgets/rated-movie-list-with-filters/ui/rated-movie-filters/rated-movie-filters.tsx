import { memo } from "react";
import { SearchInput } from "@/features/search-input";
import { useRatedMovieFilters } from "../../hooks/use-rated-movie-filters";
import { useRatedMovieFiltersDispatch } from "../../hooks/use-rated-movie-filters-dispatch";
import { ratedMovieFiltersActions } from "../../model/actions/movie-filters";
import { classNames } from "@/shared/lib/classNames/classNames";

interface MovieFiltersProps {
  className?: string;
}

export const MovieFilters = memo((props: MovieFiltersProps) => {
  const { className, ...otherProps } = props;

  const { filters, setTitle } = useRatedMovieFilters();
  const dispatch = useRatedMovieFiltersDispatch();

  const handleSearchButtonClick = () => {
    dispatch(ratedMovieFiltersActions.filterRatedMoviesAction(true));
  };

  return (
    <div className={classNames("", {}, [className])} {...otherProps}>
      <SearchInput
        placeholder="Search movie title"
        value={filters.title}
        onChange={setTitle}
        onSearch={handleSearchButtonClick}
      />
    </div>
  );
});
