import {
  MovieFiltersContext,
  MovieFiltersDispatchContext,
  MovieFiltersState,
} from "../../model/contexts/movie-filters";
import { movieFiltersReducer } from "../../model/reducers/movie-filters";
import { ReactNode, useReducer } from "react";

export const initialData: MovieFiltersState = {
  genre: undefined,
  releaseYear: undefined,
  fromRating: undefined,
  toRating: undefined,
  sortBy: "popularity.desc",
};

interface MovieFiltersProviderProps {
  children: ReactNode;
}

export const MovieFiltersProvider = ({
  children,
}: MovieFiltersProviderProps) => {
  const [data, dispatch] = useReducer(movieFiltersReducer, initialData);

  return (
    <MovieFiltersContext.Provider value={data}>
      <MovieFiltersDispatchContext.Provider value={dispatch}>
        {children}
      </MovieFiltersDispatchContext.Provider>
    </MovieFiltersContext.Provider>
  );
};
