export interface RatedMovie {
  id: number;
  original_title: string;
  release_date: string;
  poster_path: string;
  vote_average?: number;
  vote_count?: number;
  genres?: string[];
  budget?: number;
  revenue?: number;
  runtime?: number;

  rating?: number;
}
