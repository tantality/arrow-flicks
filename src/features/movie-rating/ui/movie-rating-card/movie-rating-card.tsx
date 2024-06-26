import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./movie-rating-card.module.scss";
import { MouseEvent, memo, useCallback, useState } from "react";
import { MovieCard } from "@/entities/movie";
import { MovieCardSize } from "@/entities/movie/ui/movie-card/movie-card";
import { RateMovieButton } from "../rate-movie-button/rate-movie-button";
import { RateMovieModal } from "../movie-rating-modal/movie-rating-modal";
import { RatedMovie } from "../../types/movie-rating";
import { useMovieRating } from "../../hooks/use-movie-rating";

interface MovieRatingCardProps {
  className?: string;
  size?: MovieCardSize;
  isTitleLink?: boolean;
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
  const { className, size, isTitleLink = false, ...movie } = props;
  const [isModalOpened, setIsModalOpened] = useState(false);

  const movieRating = useMovieRating(movie.id);

  const handleRateMovieButtonClick = useCallback(
    (value: boolean) => (e: MouseEvent<HTMLButtonElement>) =>
      setIsModalOpened(value),
    [setIsModalOpened]
  );

  const handleRateMovieModalClose = useCallback(
    () => setIsModalOpened(false),
    [setIsModalOpened]
  );

  const ratedMovie: RatedMovie = { ...movie, rating: movieRating };

  return (
    <>
      <MovieCard
        isTitleLink={isTitleLink}
        size={size}
        className={classNames(cls.movieRatingCard, {}, [className])}
        rateMovieButton={
          <RateMovieButton
            rating={movieRating}
            className={cls.cardButton}
            onClick={handleRateMovieButtonClick(true)}
          />
        }
        {...movie}
      />
      <RateMovieModal
        movie={ratedMovie}
        opened={isModalOpened}
        onClose={handleRateMovieModalClose}
      />
    </>
  );
});
