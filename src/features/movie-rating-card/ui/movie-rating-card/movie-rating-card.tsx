import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./movie-rating-card.module.scss";
import { memo } from "react";
import { MovieCard } from "@/entities/movie";
import { MovieCardSize } from "@/entities/movie/ui/movie-card/movie-card";
import { RateMovieButton } from "../rate-movie-button/rate-movie-button";

interface MovieRatingCardProps {
  className?: string;
  size?: MovieCardSize;
  id: number;
  original_title: string;
  release_date: string;
  poster_path: string;
  vote_average?: number;
  vote_count?: number;
  genres?: string[];
  budget?: number;
  revenue?: number;
  runtime?: number;
}

export const MovieRatingCard = memo((props: MovieRatingCardProps) => {
  const { className, ...otherProps } = props;

  return (
    <MovieCard
      className={classNames(cls.movieRatingCard, {}, [className])}
      rateMovieButton={<RateMovieButton className={cls.cardButton} />}
      {...otherProps}
    />
  );
});
