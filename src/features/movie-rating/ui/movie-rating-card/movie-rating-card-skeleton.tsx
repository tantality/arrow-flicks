import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./movie-rating-card.module.scss";
import { memo } from "react";
import { MovieCardSkeleton } from "@/entities/movie";
import { MovieCardSize } from "@/entities/movie/ui/movie-card/movie-card";

interface MovieRatingCardSkeletonProps {
  className?: string;
  size?: MovieCardSize;
}

export const MovieRatingCardSkeleton = memo(
  (props: MovieRatingCardSkeletonProps) => {
    const { className, size } = props;

    return (
      <MovieCardSkeleton
        size={size}
        className={classNames(cls.movieRatingCard, {}, [className])}
        rateMovieButton={true}
      />
    );
  }
);
