import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, useEffect } from "react";
import { Stack } from "@mantine/core";
import { BreadCrumbs } from "@/shared/ui/bread-crumbs";
import { MovieRatingCard, RatedMoviesProvider } from "@/features/movie-rating";
import { MovieDescription } from "@/entities/movie";
import { MovieCardSize } from "@/entities/movie/ui/movie-card/movie-card";
import { useMovieDetails } from "../../api/use-movie-details";
import { findOfficialTrailer } from "../../lib/find-official-trailer";
import { MovieDetailsSkeleton } from "./movie-details-skeleton";
import { AxiosError } from "axios";
import { NOT_FOUND_STATUS } from "@/shared/const/api";
import { AppRoutesByRouteName } from "@/shared/const/router";
import { DefaultErrorScreen } from "../default-error-screen/default-error-screen";
import { useRouter } from "next/router";

interface MovieDetailsProps {
  className?: string;
  movieId?: string | string[];
}

export const MovieDetails = memo((props: MovieDetailsProps) => {
  const { className, movieId, ...otherProps } = props;

  const movieIdAsNumber = Number(movieId);
  const isMovieIdValid = Boolean(movieIdAsNumber);
  const router = useRouter();

  const { data, isLoading, error } = useMovieDetails(movieIdAsNumber, {
    enabled: isMovieIdValid,
  });

  const isError404 =
    error instanceof AxiosError && error.response?.status === NOT_FOUND_STATUS;

  useEffect(() => {
    if (!isMovieIdValid && router.isReady) {
      router.push(AppRoutesByRouteName.not_found);
    }
  }, [isMovieIdValid, error, router.isReady]);

  if (isLoading) {
    return <MovieDetailsSkeleton />;
  }

  if (isError404) {
    router.push(AppRoutesByRouteName.not_found);
    return;
  }

  if (error) {
    return <DefaultErrorScreen />;
  }

  if (!data) {
    return null;
  }

  const movieCardProps = {
    id: data.id,
    original_title: data.original_title,
    release_date: data.release_date,
    poster_path: data.poster_path,
    vote_average: data.vote_average,
    vote_count: data.vote_count,
    genres: data.genres.map((genre) => genre.name),
    budget: data.budget,
    revenue: data.revenue,
    runtime: data.runtime,
  };

  const movieDescriptionProps = {
    production_companies: data.production_companies,
    overview: data.overview,
    trailer: findOfficialTrailer(data.videos.results),
  };

  const breadcrumbs = [
    { title: "Movies", href: "/movies" },
    { title: data.original_title },
  ];

  return (
    <RatedMoviesProvider>
      <Stack
        className={classNames("", {}, [className])}
        gap={"1.25rem"}
        {...otherProps}
      >
        <BreadCrumbs items={breadcrumbs} />
        <MovieRatingCard size={MovieCardSize.L} {...movieCardProps} />
        <MovieDescription {...movieDescriptionProps} />
      </Stack>
    </RatedMoviesProvider>
  );
});
