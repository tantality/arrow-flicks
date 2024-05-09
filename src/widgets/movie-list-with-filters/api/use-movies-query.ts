import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/shared/api/axios";
import { MovieFiltersState } from "../model/contexts/movie-filters";
import { MoviesDto, MoviesQueryParams } from "../model/types/movies";
import { mapFiltersToMoviesQueryParams } from "../lib/map-filters-to-movies-query-params";

type UseQueryResultType<T, E = Error> = UseQueryResult<T, E>;

export const useMoviesQuery = (
  filters: MovieFiltersState,
  page: number,
): UseQueryResultType<MoviesDto> => {
  const { sortBy, releaseYear, toRating, fromRating, genreId } = filters;
  
  const queryParams = mapFiltersToMoviesQueryParams(filters, page)
  const queryRes = useQuery({
    queryKey: ["movies", sortBy, releaseYear, toRating, fromRating, genreId, page],
    queryFn: () => getMovies(queryParams),
    staleTime: Infinity,
  });

  return queryRes;
};

const getMovies = async (params: MoviesQueryParams): Promise<MoviesDto> => {
  const res = await axiosInstance.get<MoviesDto>("discover/movie", {
    params: {
      language: "en-US",
      ...params
    },
  });
  return res.data;
};
