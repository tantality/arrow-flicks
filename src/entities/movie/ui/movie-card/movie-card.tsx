import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./movie-card.module.scss";
import { memo } from "react";
import { Card, CardSize } from "@/shared/ui/card";
import { Group, Stack } from "@mantine/core";
import { MovieCardDescriptionList } from "../movie-card-description-list/movie-card-description-list";
import NoPosterLImg from "@/shared/assets/imgs/no-poster-l.svg";
import NoPosterSImg from "@/shared/assets/imgs/no-poster-s.svg";
import StarIcon from "@/shared/assets/icons/yellow-star.svg";
import dayjs from "dayjs";
import { mapToFormattedMovieDescriptionItems } from "../../lib/map-to-formatted-movie-description-items";
import { roundNumberToLetterAbbreviation } from "../../lib/round-number-to-letter-abbreviation";

export enum MovieCardSize {
  S = "sm",
  M = "md",
  L = "lg",
}

interface MovieCardProps {
  className?: string;
  size?: MovieCardSize;
  id: number;
  original_title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  genres: string[];
  budget?: number;
  revenue?: number;
  runtime?: number;
}

export const MovieCard = memo((props: MovieCardProps) => {
  const {
    className,
    size = MovieCardSize.M,
    original_title,
    release_date,
    poster_path,
    vote_average,
    vote_count,
    genres,
    budget,
    revenue,
    runtime,
  } = props;

  const releaseYear = dayjs(release_date).get("year");
  const roundedVoteAverage = vote_average.toFixed(1);
  const roundedPeopleAmount = `(${roundNumberToLetterAbbreviation(
    vote_count
  )})`;

  const movieDetails = { genres, budget, revenue, runtime, release_date };
  const movieDescriptionItems = mapToFormattedMovieDescriptionItems(
    size,
    movieDetails
  );

  return (
    <Card
      className={classNames(cls.movieCard, {}, [className, cls[size]])}
      size={CardSize.L}
    >
      <Group gap={"1rem"} className={cls.container}>
        <div className={cls.poster}>
          {size === MovieCardSize.L ? (
            <NoPosterLImg alt="poster-placeholder" />
          ) : (
            <NoPosterSImg alt="poster-placeholder" />
          )}
        </div>
        <Stack className={cls.body} justify="space-between">
          <Group className={cls.header}>
            <Stack gap={"0.5rem"}>
              <div className={cls.title}>{original_title}</div>
              <div className={cls.releaseYear}>{releaseYear}</div>
              <Group className={cls.averagePeopleRating} gap={"0.5rem"}>
                <Group gap={"0.25rem"}>
                  <StarIcon />
                  <div className={cls.averageRating}>{roundedVoteAverage}</div>
                </Group>
                <div className={cls.peopleAmount}>{roundedPeopleAmount}</div>
              </Group>
            </Stack>
            <StarIcon />
          </Group>
          <MovieCardDescriptionList
            items={movieDescriptionItems}
            cardSize={size}
          />
        </Stack>
      </Group>
    </Card>
  );
});
