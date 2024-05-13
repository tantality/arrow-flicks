import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, MouseEvent } from "react";
import { MessageScreen } from "@/features/message-screen";
import { useRouter } from "next/router";
import { AppRoutesByRouteName } from "@/shared/const/router";
import SittingGuyImg from "@/shared/assets/imgs/sitting-guy.svg";
import { Stack } from "@mantine/core";

interface NoRatedMoviesProps {
  className?: string;
}

export const NoRatedMoviesScreen = memo((props: NoRatedMoviesProps) => {
  const { className, ...otherProps } = props;
  const router = useRouter();

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    router.push(AppRoutesByRouteName.movies);
  };

  const buttonProps = {
    text: "Find movies",
    onClick: handleButtonClick,
  };

  return (
    <Stack justify="center" h="100%" align="center">
      <MessageScreen
        justify="center"
        img={<SittingGuyImg />}
        message={"You haven't rated any films yet"}
        buttonProps={buttonProps}
        className={classNames("", {}, [className])}
        {...otherProps}
      />
    </Stack>
  );
});
