import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./rate-movie-button.module.scss";
import { ButtonHTMLAttributes, memo } from "react";
import { ActionIcon, Group } from "@mantine/core";
import StarIcon from "@/shared/assets/icons/star-default.svg";

interface RateMovieButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  rating?: number;
}

export const RateMovieButton = memo((props: RateMovieButtonProps) => {
  const { className, rating, ...otherProps } = props;

  const mods = { [cls.activeButton]: Boolean(rating) };

  return (
    <Group
      className={classNames(cls.container, {}, [className])}
      gap={"0.25rem"}
      align="center"
    >
      <ActionIcon
        className={classNames(cls.rateMovieButton, mods)}
        {...otherProps}
      >
        <StarIcon />
      </ActionIcon>
      {rating ? <div className={cls.text}>{rating}</div> : null}
    </Group>
  );
});
