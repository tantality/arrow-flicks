import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./movie-card-description-list.module.scss";
import { memo } from "react";
import { MovieCardDescriptionListItem } from "../../model/types/movie-details";
import React from "react";
import { MovieCardSize } from "../movie-card/movie-card";

interface MovieCardDescriptionListProps {
  className?: string;
  items: MovieCardDescriptionListItem[];
  cardSize: MovieCardSize;
}

export const MovieCardDescriptionList = memo(
  (props: MovieCardDescriptionListProps) => {
    const { className, items, cardSize, ...otherProps } = props;

    if (!items.length) {
      return null;
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
