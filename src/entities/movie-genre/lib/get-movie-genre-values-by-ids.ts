import { MovieGenreDto } from "../model/types/movie-genre";

export const getMovieGenreValuesByIds = (
  genre_ids: number[],
  genres?: MovieGenreDto[]
): string[] | undefined => {
  if (!genres) {
    return genres;
  }

  const genreIds = new Set(genre_ids);

  const values = genres.reduce((values: string[], currentGenre) => {
    if (genreIds.has(currentGenre.id)) {
      values.push(currentGenre.name);
    }

    return values;
  }, []);

  return values;
};
