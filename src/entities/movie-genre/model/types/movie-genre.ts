interface MovieGenreDto{
  id: number;
  name: string;
}

export interface MovieGenresDto {
  genres: MovieGenreDto[]
}
