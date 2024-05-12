import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./titled-movie-description-block.module.scss";
import { ReactNode, memo } from "react";
import { Stack } from "@mantine/core";

interface TitledMovieDescriptionBlockProps {
  className?: string;
  title: string;
  children: ReactNode;
}

export const TitledMovieDescriptionBlock = memo(
  (props: TitledMovieDescriptionBlockProps) => {
    const { className, title, children, ...otherProps } = props;

    return (
      <Stack
        className={classNames(cls.titledMovieDescriptionBlock, {}, [className])}
        {...otherProps}
      >
        <div className={cls.title}>{title}</div>
        {children}
      </Stack>
    );
  }
);
