import { QueryCache, UseQueryResult, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/shared/api/axios";
import { MoviesDto, MoviesQueryParams } from "../model/types/movies";
import { mapFiltersToMoviesQueryParams } from "../lib/map-filters-to-movies-query-params";
import { usePaginationPage } from "@/app/providers/PaginationPageProvider";
import { useMovieFilters } from "../hooks/use-movie-filters";
import { AxiosError } from "axios";
import { MovieFiltersErrors } from "../model/validations/movie-filters-schema";
import { APT_URL, BadRequestTypes } from "@/shared/const/api";
import { useContext, useEffect, useMemo } from "react";
import { queryClientContext } from "@/app/providers/ReactQueryProvider/ui/ReactQueryProvider";

type UseQueryResultType<T, E = Error> = UseQueryResult<T, E>;

export const useMoviesQuery = (): UseQueryResultType<MoviesDto> => {
  const { data, areThereValidationErrors, setErrors } = useMovieFilters();
  const { page } = usePaginationPage();

  const queryParams = useMemo(() => {
    console.log("inside query  params");
    return mapFiltersToMoviesQueryParams(data, page);
  }, [
    data.fromRating,
    data.genreId,
    data.toRating,
    data.releaseYear,
    data.sortBy,
    page,
  ]);

  console.log("filters", data);
  console.log("page", page);
  console.log("queryParams", queryParams);

  // queryClient.invalidateQueries({ queryKey: ["movies"] });


  const queryRes = useQuery({
    queryKey: ["movies", data, page],
    staleTime: 0,
    queryFn: ()=>getMovies(queryParams),
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
  const res = await axiosInstance.get<MoviesDto>("/api/proxys/discover/movie", {
    params: {
      language: "en-US",
      ...params,
    },
  });

  console.log("data", res.data);
  return res.data;
};
