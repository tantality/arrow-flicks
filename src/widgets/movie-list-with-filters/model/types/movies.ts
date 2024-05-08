export interface MoviesDto {
  page: number;
  results: MovieDto[];
  total_pages: number;
  total_results: number;
}

export interface MovieDto {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MoviesQueryParams {
  with_genres?: number[];
  primary_release_year?: number;
  page?: number;
  sort_by?: string;
  "vote_average.lte"?: number;
  "vote_average.gte"?: number;
}
