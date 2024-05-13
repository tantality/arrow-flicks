import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, useEffect } from "react";
import SearchGuyImg from "@/shared/assets/imgs/search-guy.svg";
import { MessageScreen } from "@/features/message-screen";
import { useMovieFilters } from "../../hooks/use-movie-filters";

interface NoFilteredMoviesScreenProps {
  className?: string;
}

export const NoFilteredMoviesScreen = memo(
  (props: NoFilteredMoviesScreenProps) => {
    const { className, ...otherProps } = props;
    const { resetFilters, dispatchNoFilterResultsAction } = useMovieFilters();

    useEffect(() => {
      resetFilters();
      dispatchNoFilterResultsAction();
    }, []);

    return (
      <MessageScreen
        className={classNames("", {}, [className])}
        img={<SearchGuyImg />}
        message={"We don't have such movies, look for another one"}
        {...otherProps}
      />
    );
  }
);
