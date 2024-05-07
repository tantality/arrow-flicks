import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { MovieGenresDto } from "../model/types/movie-genre";
import { axiosInstance } from "@/shared/api/axios";
import { DropdownOption } from "@/shared/types/dropdown-option.type";
import { mapMovieGenresToDropdownOptions } from "../lib/map-movie-genres-to-dropdown-options";

const getMovieGenres = async (): Promise<MovieGenresDto> => {
  const res = await axiosInstance.get<MovieGenresDto>(
    "genre/movie/list?language=en"
  );
  return res.data;
};

type UseQueryResultType<T> = UseQueryResult<T[], Error>;

export const useMovieGenresQuery = (): UseQueryResultType<DropdownOption> => {
  const queryRes = useQuery({
    queryKey: ["movie-genres"],
    queryFn: () => getMovieGenres(),
    staleTime: Infinity,
  });

  const movieGenres = mapMovieGenresToDropdownOptions(queryRes.data);

  return { ...queryRes, data: movieGenres } as UseQueryResultType<DropdownOption>;
};
