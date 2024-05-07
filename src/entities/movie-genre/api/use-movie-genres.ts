import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { MovieGenreDto } from "../model/types/movie-genre";
import { axiosInstance } from "@/shared/api/axios";

const getMovieGenres = async (): Promise<MovieGenreDto[]> => {
  const res = await axiosInstance.get<MovieGenreDto[]>("genre/movie/list?language=en");
  return res.data;
};

export const useMovieGenres = (): UseQueryResult<MovieGenreDto[]> => {
  const data = useQuery({
    queryKey: ["movie-genres"],
    queryFn: () => getMovieGenres(),
    staleTime: Infinity,
  });

  return data;
};
