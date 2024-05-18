import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/shared/api/axios";
import { MoviesDto, MoviesQueryParams } from "../model/types/movies";
import { mapFiltersToMoviesQueryParams } from "../lib/map-filters-to-movies-query-params";
import { usePaginationPage } from "@/app/providers/PaginationPageProvider";
import { useMovieFilters } from "../hooks/use-movie-filters";

type UseQueryResultType<T, E = Error> = UseQueryResult<T, E>;

export const useMoviesQuery = (
): UseQueryResultType<MoviesDto>=> {

  const { data, areThereClientValidationErrors } = useMovieFilters();
  const { page } = usePaginationPage();

  const queryParams = mapFiltersToMoviesQueryParams(data, page);

  const queryRes = useQuery({
    queryKey: [
      "movies",
      data.sortBy,
      data.releaseYear,
      data.toRating,
      data.fromRating,
      data.genreId,
      page,
    ],
    queryFn: () => getMovies(queryParams),
    staleTime: Infinity,
    enabled : !areThereClientValidationErrors
  });

  return queryRes;
};

const getMovies = async (params: MoviesQueryParams): Promise<MoviesDto> => {
  const res = await axiosInstance.get<MoviesDto>("/api/proxy/discover/movie", {
    params: {
      language: "en-US",
      ...params,
    },
  });
  return res.data;
};
