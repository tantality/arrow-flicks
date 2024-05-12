export interface MovieDetailsDto {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget?: number;
  genres: GenreDto[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: OriginCountryDto[];
  original_language: OriginalLanguageDto;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompanyDto[];
  production_countries: ProductionCountryDto[];
  release_date: string; //date
  revenue?: number;
  runtime?: number;
  spoken_languages: SpokenLanguageDto[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average?: number;
  vote_count?: number;
  videos: VideosDto;
}

export interface GenreDto {
  id: number;
  name: string;
}

export enum OriginCountryDto {
  Us = "US",
}

export enum OriginalLanguageDto {
  En = "en",
}

export interface ProductionCompanyDto {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: OriginCountryDto;
}

export interface ProductionCountryDto {
  iso_3166_1: OriginCountryDto;
  name: string;
}

export interface SpokenLanguageDto {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface VideosDto {
  results: VideoDto[];
}

export interface VideoDto {
  iso_639_1: OriginalLanguageDto;
  iso_3166_1: OriginCountryDto;
  name: string;
  key: string;
  site: SiteDto;
  size: number;
  type: VideoTypes;
  official: boolean;
  published_at: Date;
  id: string;
}

export enum VideoTypes {
  Trailer = "Trailer",
  BehindTheScenes = " Behind the Scenes",
  Featurette = "Featurette",
  Teaser = "Teaser",
}

export enum SiteDto {
  YouTube = "YouTube",
}
