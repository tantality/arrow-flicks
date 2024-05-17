import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { MovieGenresDto } from "../model/types/movie-genre";
import { axiosInstance } from "@/shared/api/axios";
import { DropdownOption } from "@/shared/types/dropdown-option.type";
import { mapMovieGenresToDropdownOptions } from "../lib/map-movie-genres-to-dropdown-options";
import { useMovieGenresDispatch } from "../hooks/use-movie-genres-dispatch";
import { useEffect } from "react";
import { setGenresAction } from "../model/actions/movie-genres/set-genres";

const getMovieGenres = async (): Promise<MovieGenresDto> => {
  const res = await axiosInstance.get<MovieGenresDto>(
    "/api/proxy/genre/movie/list?language=en"
  );
  return res.data;
};

type UseQueryResultType<T, E = Error> = UseQueryResult<T, E>;

export const useMovieGenresQuery = (): UseQueryResultType<DropdownOption[]> => {
  const queryRes = useQuery({
    queryKey: ["movie-genres"],
    queryFn: () => getMovieGenres(),
    staleTime: Infinity,
  });

  const genres = queryRes.data?.genres;
  const dispatch = useMovieGenresDispatch();

  useEffect(() => {
    dispatch(setGenresAction(queryRes.data?.genres));
  }, [genres, dispatch]);

  const movieGenres = mapMovieGenresToDropdownOptions(queryRes.data);

  return {
    ...queryRes,
    data: movieGenres,
  } as UseQueryResultType<DropdownOption[]>;
};
