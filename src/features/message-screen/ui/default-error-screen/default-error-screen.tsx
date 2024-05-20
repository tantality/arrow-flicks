import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import SearchGuyImg from "@/shared/assets/imgs/search-guy.svg";
import { MessageScreen } from "@/features/message-screen";

interface DefaultErrorScreenProps {
  className?: string;
}

export const DefaultErrorScreen = memo(
  (props: DefaultErrorScreenProps) => {
    const { className, ...otherProps } = props;

    return (
      <MessageScreen
        className={classNames("", {}, [className])}
        img={<SearchGuyImg />}
        message={"Ooops, something went wrong. Try later"}
        {...otherProps}
      />
    );
  }
);
