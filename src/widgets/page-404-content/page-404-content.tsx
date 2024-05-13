import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, MouseEvent } from "react";
import { MessageScreen } from "@/features/message-screen";
import Page404Img from "@/shared/assets/imgs/404.svg";
import { AppRoutesByRouteName } from "@/shared/const/router";
import { useRouter } from "next/router";

interface Page404ContentProps {
  className?: string;
}

export const Page404Content = memo((props: Page404ContentProps) => {
  const { className, ...otherProps } = props;

  const router = useRouter();

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    router.push(AppRoutesByRouteName.movies);
  };

  const buttonProps = {
    text: "Go Home",
    onClick: handleButtonClick,
  };

  return (
    <MessageScreen
      className={classNames("", {}, [className])}
      img={<Page404Img />}
      message="We can’t find the page you are looking for"
      gap="3rem"
      buttonProps={buttonProps}
      {...otherProps}
    />
  );
});
