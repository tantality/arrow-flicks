import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, useEffect } from "react";
import SearchGuyImg from "@/shared/assets/imgs/search-guy.svg";
import { MessageScreen } from "@/features/message-screen";
import { useRatedMovieFilters } from "../../hooks/use-rated-movie-filters";

interface NoFilteredMoviesScreenProps {
  className?: string;
}

export const NoFilteredMoviesScreen = memo(
  (props: NoFilteredMoviesScreenProps) => {
    const { className, ...otherProps } = props;
    const { resetFilters } = useRatedMovieFilters();

    useEffect(() => {
      resetFilters();
    }, []);

    return (
      <MessageScreen
        className={classNames("", {}, [className])}
        img={<SearchGuyImg />}
        message={"You don't have such rated movies, look for others"}
        {...otherProps}
      />
    );
  }
);
