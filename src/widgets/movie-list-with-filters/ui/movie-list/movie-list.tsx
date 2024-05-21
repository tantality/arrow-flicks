import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { MovieDto } from "../../model/types/movies";
import { MovieCardSize } from "@/entities/movie/ui/movie-card/movie-card";
import {
  MovieRatingCard,
  MovieRatingCardSkeleton,
} from "@/features/movie-rating";
import { Grid, GridCol } from "@mantine/core";
import {
  getMovieGenreValuesByIds,
  useMovieGenres,
} from "@/entities/movie-genre";

interface MovieListProps {
  className?: string;
  isLoading?: boolean;
  movies?: MovieDto[];
  skeletonAmount?: number;
}

const gridColSpan = { lg: 6, md: 6, sm: 6, xs: 12 };

const getSkeletons = (skeletonAmount: number) =>
  new Array(skeletonAmount).fill(0).map((_, index) => (
    <GridCol span={gridColSpan} key={index}>
      <MovieRatingCardSkeleton key={index} />
    </GridCol>
  ));

export const MovieList = memo((props: MovieListProps) => {
  const {
    className,
    isLoading = false,
    movies,
    skeletonAmount = 8,
    ...otherProps
  } = props;

  const genres = useMovieGenres();

  const renderMovieRatingCard = (movie: MovieDto) => (
    <GridCol span={gridColSpan} key={movie.id}>
      <MovieRatingCard
        isTitleLink={true}
        size={MovieCardSize.M}
        key={movie.id}
        {...movie}
        genres={getMovieGenreValuesByIds(movie.genre_ids, genres)}
      />
    </GridCol>
  );

  return (
    <Grid
      className={classNames("movieList", {}, [className])}
      gutter={"1rem"}
      {...otherProps}
    >
      {isLoading && getSkeletons(skeletonAmount)}
      {movies && movies.length > 0 ? movies.map(renderMovieRatingCard) : null}
    </Grid>
  );
});
