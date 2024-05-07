import { DropdownOption } from "@/shared/types/dropdown-option.type";
import { MovieGenresDto } from "../model/types/movie-genre";

export function mapMovieGenresToDropdownOptions(
  genreWrapper?: MovieGenresDto
): DropdownOption[] | undefined {
  const genres = genreWrapper?.genres;
  if (!genreWrapper || !genres) {
    return undefined;
  }

  return genres.map((genre) => ({
    label: genre.name,
    value: String(genre.id),
  }));
}
