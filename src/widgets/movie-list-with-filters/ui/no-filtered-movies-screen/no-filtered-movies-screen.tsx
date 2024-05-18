import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import SearchGuyImg from "@/shared/assets/imgs/search-guy.svg";
import { MessageScreen } from "@/features/message-screen";

interface NoFilteredMoviesScreenProps {
  className?: string;
}

export const NoFilteredMoviesScreen = memo(
  (props: NoFilteredMoviesScreenProps) => {
    const { className, ...otherProps } = props;

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
