import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./titled-movie-description-block.module.scss";
import { ReactNode, memo } from "react";
import { Skeleton, SkeletonProps, Stack } from "@mantine/core";

interface TitledMovieDescriptionBlockSkeletonProps extends SkeletonProps {
  className?: string;
  children: ReactNode;
}

export const TitledMovieDescriptionBlockSkeleton = memo(
  (props: TitledMovieDescriptionBlockSkeletonProps) => {
    const { className, children, ...otherProps } = props;

    return (
      <Stack
        className={classNames(cls.titledMovieDescriptionBlock, {}, [className])}
      >
        <Skeleton className={cls.title} {...otherProps} />
        {children}
      </Stack>
    );
  }
);
