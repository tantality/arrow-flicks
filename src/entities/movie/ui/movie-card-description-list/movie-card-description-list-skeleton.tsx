import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "../movie-card-description-list/movie-card-description-list.module.scss";
import { memo } from "react";
import { MovieCardSize } from "../movie-card/movie-card";
import { Skeleton } from "@mantine/core";
import React from "react";

interface MovieCardDescriptionListSkeletonProps {
  className?: string;
  cardSize: MovieCardSize;
}

const getSkeletons = (skeletonAmount: number) =>
  Array(skeletonAmount)
    .fill(0)
    .map((_, ind) => (
      <React.Fragment key={ind}>
        <Skeleton className={cls.itemName} height={"20px"} />
        <Skeleton className={cls.itemValue} height={"20px"} />
      </React.Fragment>
    ));

export const MovieCardDescriptionListSkeleton = memo(
  (props: MovieCardDescriptionListSkeletonProps) => {
    const { className, cardSize, ...otherProps } = props;

    const skeletonAmount = cardSize === MovieCardSize.L ? 5 : 1;

    return (
      <div
        className={classNames(cls.movieCardDescriptionList, {}, [
          className,
          cls[cardSize],
          cls.skeleton,
        ])}
        {...otherProps}
      >
        {getSkeletons(skeletonAmount)}
      </div>
    );
  }
);
