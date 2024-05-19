import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./movie-card-description-list.module.scss";
import { memo } from "react";
import { MovieCardDescriptionListItem } from "../../model/types/movie-details";
import React from "react";
import { MovieCardSize } from "../movie-card/movie-card";
import { Skeleton } from "@mantine/core";

interface MovieCardDescriptionListProps {
  className?: string;
  isLoading?: boolean;
  items: MovieCardDescriptionListItem[];
  cardSize: MovieCardSize;
}

export const MovieCardDescriptionList = memo(
  (props: MovieCardDescriptionListProps) => {
    const {
      className,
      items,
      cardSize,
      isLoading = false,
      ...otherProps
    } = props;

    if (!items.length && !isLoading) {
      return null;
    }

    if (isLoading) {
      const skeletonAmount = cardSize === MovieCardSize.L ? 5 : 1;
      const arr = Array(skeletonAmount).fill(skeletonAmount);
      return (
        <div
          className={classNames(cls.movieCardDescriptionList, {}, [
            className,
            cls[cardSize],
            cls.skeleton,
          ])}
          {...otherProps}
        >
          {arr.map((_, ind) => (
            <React.Fragment key={ind}>
              <Skeleton className={cls.itemName} height={"20px"} />
              <Skeleton className={cls.itemValue} height={"20px"} />
            </React.Fragment>
          ))}
        </div>
      );
    }

    return (
      <div
        className={classNames(cls.movieCardDescriptionList, {}, [
          className,
          cls[cardSize],
        ])}
        {...otherProps}
      >
        {items.map((item, ind) => (
          <React.Fragment key={ind}>
            <div className={cls.itemName}>{item.name}</div>
            <div className={cls.itemValue}>{item.value}</div>
          </React.Fragment>
        ))}
      </div>
    );
  }
);
