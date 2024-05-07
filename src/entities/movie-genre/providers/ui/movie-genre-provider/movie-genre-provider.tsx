import {
  MovieGenresContext,
  MovieGenresContextDispatchContext,
  MovieGenresState,
} from "../../../model/contexts/movie-genres.context";
import { movieGenresReducer } from "../../../model/reducers/movie-genres.reducer";
import { ReactNode, useReducer } from "react";

export const initialData: MovieGenresState = {
  genres: undefined,
};

interface MovieGenreProviderProps {
  children: ReactNode;
}

export const MovieGenreProvider = ({ children }: MovieGenreProviderProps) => {
  const [movieGenres, dispatch] = useReducer(movieGenresReducer, initialData);

  return (
    <MovieGenresContext.Provider value={movieGenres}>
      <MovieGenresContextDispatchContext.Provider value={dispatch}>
        {children}
      </MovieGenresContextDispatchContext.Provider>
    </MovieGenresContext.Provider>
  );
};
