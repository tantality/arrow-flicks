import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./movie-card.module.scss";
import { ReactNode, memo } from "react";
import { Card, CardSize } from "@/shared/ui/card";
import { Group, Skeleton, Stack } from "@mantine/core";
import { MovieCardDescriptionList } from "../movie-card-description-list/movie-card-description-list";
import NoPosterLImg from "@/shared/assets/imgs/no-poster-l.svg";
import NoPosterSImg from "@/shared/assets/imgs/no-poster-s.svg";
import StarIcon from "@/shared/assets/icons/yellow-star.svg";
import dayjs from "dayjs";
import { mapToFormattedMovieDescriptionItems } from "../../lib/map-to-formatted-movie-description-items";
import { roundNumberToLetterAbbreviation } from "../../lib/round-number-to-letter-abbreviation";
import Link from "next/link";
import { Img } from "@/shared/ui/img";
import { APT_IMG_URL } from "@/shared/const/api";
import { getMovieDetailsRoute } from "@/shared/const/router";

export enum MovieCardSize {
  S = "sm",
  M = "md",
  L = "lg",
}

interface MovieCardProps {
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
  rateMovieButton?: ReactNode;
}

const API_IMG_URL_L = `${APT_IMG_URL}/w342/`;
const API_IMG_URL_S_M = `${APT_IMG_URL}/w154/`;

export const MovieCard = memo((props: MovieCardProps) => {
  const {
    className,
    isTitleLink = false,
    size = MovieCardSize.M,
    id,
    original_title,
    release_date,
    poster_path,
    vote_average,
    vote_count,
    genres,
    budget,
    revenue,
    runtime,
    rateMovieButton,
  } = props;

  const releaseYear = dayjs(release_date).isValid()
    ? dayjs(release_date).get("year")
    : null;

  const roundedVoteAverage = !Object.is(vote_average, undefined)
    ? Number(vote_average).toFixed(1)
    : null;

  const roundedPeopleAmount = !Object.is(vote_average, undefined)
    ? `(${roundNumberToLetterAbbreviation(Number(vote_count))})`
    : null;

  const movieDetails = { genres, budget, revenue, runtime, release_date };
  const movieDescriptionItems = mapToFormattedMovieDescriptionItems(
    size,
    movieDetails
  );

  const tittle = isTitleLink ? (
    <Link href={getMovieDetailsRoute(id)}>
      <div className={cls.title}>{original_title}</div>
    </Link>
  ) : (
    <div className={cls.title}>{original_title}</div>
  );

  const img =
    size === MovieCardSize.L ? (
      <Img
        src={`${API_IMG_URL_L + poster_path}`}
        alt={original_title}
        height={352}
        width={250}
        placeholder={<NoPosterLImg alt="poster-placeholder" />}
        loadingComp={<Skeleton height={352} width={250} radius={0} />}
      />
    ) : (
      <Img
        src={`${API_IMG_URL_S_M + poster_path}`}
        alt={original_title}
        height={170}
        width={119}
        placeholder={
          <NoPosterSImg height={170} width={119} alt="poster-placeholder" />
        }
        loadingComp={<Skeleton height={170} width={119} radius={0} />}
      />
    );

  return (
    <Card
      className={classNames(cls.movieCard, {}, [className, cls[size]])}
      size={CardSize.L}
    >
      <Group gap={"1rem"} className={cls.container}>
        {img}
        <Stack className={cls.body} justify="space-between">
          <Group className={cls.header}>
            <Stack gap={"0.5rem"}>
              {tittle}
              {releaseYear && (
                <div className={cls.releaseYear}>{releaseYear}</div>
              )}
              {roundedPeopleAmount && roundedVoteAverage ? (
                <Group className={cls.averagePeopleRating} gap={"0.5rem"}>
                  <Group gap={"0.25rem"}>
                    <StarIcon />
                    <div className={cls.averageRating}>
                      {roundedVoteAverage}
                    </div>
                  </Group>
                  <div className={cls.peopleAmount}>{roundedPeopleAmount}</div>
                </Group>
              ) : null}
            </Stack>
            {rateMovieButton}
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
