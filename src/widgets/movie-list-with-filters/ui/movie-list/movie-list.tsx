import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { MovieDto } from "../../model/types/movies";
import { MovieCardSize } from "@/entities/movie/ui/movie-card/movie-card";
import { MovieRatingCard } from "@/features/movie-rating";
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

export const MovieList = memo((props: MovieListProps) => {
  const {
    className,
    isLoading = false,
    movies,
    skeletonAmount = 8,
    ...otherProps
  } = props;

  const gridColSpan = { lg: 6, md: 6, sm: 6, xs: 12 };
  const genres = useMovieGenres();

  if (isLoading) {
    const arr = Array(skeletonAmount).fill(skeletonAmount);
    return (
      <Grid
        className={classNames("movieList", {}, [className])}
        gutter={"1rem"}
      >
        {arr.map((_, ind) => (
          <GridCol span={gridColSpan} key={ind}>
            <MovieRatingCard
              isLoading={isLoading}
              size={MovieCardSize.M}
              key={ind}
              id={ind}
              original_title={""}
              release_date={""}
              poster_path={""}
            />
          </GridCol>
        ))}
      </Grid>
    );
  }

  return (
    <Grid className={classNames("movieList", {}, [className])} gutter={"1rem"}>
      {movies?.map((movie) => (
        <GridCol span={gridColSpan} key={movie.id}>
          <MovieRatingCard
            isTitleLink={true}
            size={MovieCardSize.M}
            key={movie.id}
            {...movie}
            genres={getMovieGenreValuesByIds(movie.genre_ids, genres)}
          />
        </GridCol>
      ))}
    </Grid>
  );
});
