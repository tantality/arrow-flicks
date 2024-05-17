import { MovieDetailsDto } from "@/entities/movie";
import { axiosInstance } from "@/shared/api/axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useMovieDetails = (movieId: number, options?: any) => {
  const queryRes = useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => getMovieDetailsById(movieId),
    staleTime: Infinity,
    ...options,
  }) as UseQueryResult<MovieDetailsDto>;

  return queryRes;
};

const getMovieDetailsById = async (id: number): Promise<MovieDetailsDto> => {
  const res = await axiosInstance.get<MovieDetailsDto>(`/api/proxy/movie/${id}`, {
    params: {
      append_to_response: "videos",
    },
  });
  return res.data;
};
