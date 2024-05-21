import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "../movie-card/movie-card.module.scss";
import { memo } from "react";
import { Card, CardSize } from "@/shared/ui/card";
import { Group, Skeleton, Stack } from "@mantine/core";
import { MovieCardDescriptionList } from "../movie-card-description-list/movie-card-description-list";
import { MovieCardSize } from "./movie-card";
import { MovieCardDescriptionListSkeleton } from "../movie-card-description-list/movie-card-description-list-skeleton";

interface MovieCardSkeletonProps {
  className?: string;
  size?: MovieCardSize;
  rateMovieButton?: boolean;
}

export const MovieCardSkeleton = memo((props: MovieCardSkeletonProps) => {
  const {
    className,
    size = MovieCardSize.M,
    rateMovieButton = false,
    ...otherProps
  } = props;

  return (
    <Card
      className={classNames(cls.movieCard, {}, [
        className,
        cls[size],
        cls.skeleton,
      ])}
      size={CardSize.L}
    >
      <Group gap={"1rem"} className={cls.container}>
        <Skeleton
          width={size === MovieCardSize.L ? "250px" : "119px"}
          height={size === MovieCardSize.L ? "352px" : "170px"}
        />
        <Stack className={cls.body} justify="space-between">
          <Group className={cls.header}>
            <Stack gap={"0.5rem"} className={cls.stack}>
              <Skeleton className={cls.title} width={"100%"} height={"24px"} />
              <Skeleton
                className={cls.releaseYear}
                width={"50px"}
                height={"20px"}
              />
              <Group className={cls.averagePeopleRating} gap={"0.5rem"}>
                <Group gap={"0.25rem"}>
                  <Skeleton width={"28px"} height={"28px"} />
                  <Skeleton
                    className={cls.averageRating}
                    width={"40px"}
                    height={"28px"}
                  />
                </Group>
                <Skeleton
                  className={cls.peopleAmount}
                  width={"60px"}
                  height={"28px"}
                />
              </Group>
            </Stack>
            {rateMovieButton ? (
              <Skeleton width={"28px"} height={"28px"} />
            ) : null}
          </Group>
          <MovieCardDescriptionListSkeleton cardSize={size} />
        </Stack>
      </Group>
    </Card>
  );
});
