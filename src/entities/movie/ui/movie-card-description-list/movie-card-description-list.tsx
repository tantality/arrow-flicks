import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./movie-card-description-list.module.scss";
import { memo } from "react";
import { MovieCardDescriptionListItem } from "../../model/types/movie";
import React from "react";

interface MovieCardDescriptionListProps {
  className?: string;
  items: MovieCardDescriptionListItem[];
}

export const MovieCardDescriptionList = memo(
  (props: MovieCardDescriptionListProps) => {
    const { className, items, ...otherProps } = props;

    return (
      <div
        className={classNames(cls.movieCardDescriptionList, {}, [className])}
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
