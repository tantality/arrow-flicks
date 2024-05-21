import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { Group, Skeleton, Stack } from "@mantine/core";
import { MovieRatingCardSkeleton } from "@/features/movie-rating";
import { MovieCardSize } from "@/entities/movie/ui/movie-card/movie-card";
import { MovieDescriptionSkeleton } from "@/entities/movie";

interface MovieDetailsSkeletonProps {
  className?: string;
}

export const MovieDetailsSkeleton = memo((props: MovieDetailsSkeletonProps) => {
  const { className, ...otherProps } = props;

  return (
    <Stack
      className={classNames("", {}, [className])}
      gap="1.25rem"
      {...otherProps}
    >
      <Group gap="1rem">
        <Skeleton height="20px" width="70px" />
        <Skeleton height="20px" width="50%" />
      </Group>
      <MovieRatingCardSkeleton size={MovieCardSize.L} />
      <MovieDescriptionSkeleton />
    </Stack>
  );
});
