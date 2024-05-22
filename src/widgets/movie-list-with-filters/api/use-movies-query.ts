import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/shared/api/axios";
import { MoviesDto, MoviesQueryParams } from "../model/types/movies";
import { mapFiltersToMoviesQueryParams } from "../lib/map-filters-to-movies-query-params";
import { usePaginationPage } from "@/app/providers/PaginationPageProvider";
import { useMovieFilters } from "../hooks/use-movie-filters";
import { AxiosError } from "axios";
import { MovieFiltersErrors } from "../model/validations/movie-filters-schema";
import { APT_URL, BadRequestTypes } from "@/shared/const/api";
import { useMemo } from "react";

type UseQueryResultType<T, E = Error> = UseQueryResult<T, E>;

export const useMoviesQuery = (): UseQueryResultType<MoviesDto> => {
  const { data, areThereValidationErrors, setErrors } = useMovieFilters();
  const { page } = usePaginationPage();

  const queryParams = useMemo(
    () =>{
      console.log('inside query  params' )

      return mapFiltersToMoviesQueryParams(data, page);
    },
    [data.fromRating, data.genreId, data.toRating, data.releaseYear, data.sortBy, page]
  );
  
  console.log("filters", data);
  console.log("page", page);
  console.log("queryParams", queryParams);

  const queryRes = useQuery({
    queryKey: [
      "movies",
      queryParams.page,
      queryParams.primary_release_year,
      queryParams["vote_average.gte"],
      queryParams["vote_average.lte"],
      queryParams.sort_by,
      queryParams.with_genres

      // data.sortBy,
      // data.releaseYear,
      // data.toRating,
      // data.fromRating,
      // data.genreId,
      // page,
    ],
    staleTime: 0,
    queryFn: () => getMovies(queryParams),
    enabled: !areThereValidationErrors,
  });

  if (areThereValidationErrors) {
    return { data: undefined } as UseQueryResultType<MoviesDto>;
  }

  if (queryRes.error instanceof AxiosError) {
    const error = queryRes.error;
    if (error.response?.data?.type === BadRequestTypes.InvalidFilters) {
      const errorMessage = error.response.data.error as MovieFiltersErrors;
      setErrors(errorMessage);
    }
  }

  return queryRes;
};

const getMovies = async (params: MoviesQueryParams): Promise<MoviesDto> => {
  console.log("params", params);
  const res = await axiosInstance.get<MoviesDto>("/api/proxy/discover/movie", {
    params: {
      language: "en-US",
      ...params,
    },
  });

  console.log("data", res.data);
  return res.data;
};
