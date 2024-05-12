import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { Stack } from "@mantine/core";
import { BreadCrumbs } from "@/shared/ui/bread-crumbs";
import { MovieRatingCard, RatedMoviesProvider } from "@/features/movie-rating";
import { MovieDescription } from "@/entities/movie";
import { MovieCardSize } from "@/entities/movie/ui/movie-card/movie-card";
import { useMovieDetails } from "../../api/use-movie-details";
import { findOfficialTrailer } from "../../lib/find-official-trailer";

interface MovieDetailsProps {
  className?: string;
  movieId?: string | string[];
}

export const MovieDetails = memo((props: MovieDetailsProps) => {
  const { className, movieId, ...otherProps } = props;

  const movieIdAsNumber = Number(movieId);
  const isMovieIdValid = Boolean(movieIdAsNumber);

  const { data } = useMovieDetails(movieIdAsNumber, {
    enabled: isMovieIdValid,
  });

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

  const MovieDescriptionProps = {
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
        <MovieDescription {...MovieDescriptionProps} />
      </Stack>
    </RatedMoviesProvider>
  );
});
