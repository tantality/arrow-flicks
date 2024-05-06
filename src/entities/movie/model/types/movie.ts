export interface MovieDetailsDto {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string | null;
  budget: number;
  genres: GenreDto[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompanyDto[];
  production_countries: ProductionCountryDto[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguageDto[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface GenreDto {
  id: number;
  name: string;
}

export interface ProductionCompanyDto {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface ProductionCountryDto {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguageDto {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MovieCardDescriptionListItem {
  name: string;
  value: string | number;
}
