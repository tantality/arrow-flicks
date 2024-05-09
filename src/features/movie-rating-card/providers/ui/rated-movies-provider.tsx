import { LocalStorageKeys } from "@/shared/const/local-storage";
import {
  RatedMoviesContext,
  RatedMoviesDispatchContext,
  RatedMoviesState,
} from "../../model/contexts/rated-movies";
import { ReactNode, useReducer } from "react";
import { ratedMoviesReducer } from "../../model/reducers/rated-movies";

const IS_SERVER = typeof window === "undefined";

export const initialData: RatedMoviesState = {
  movies: !IS_SERVER
    ? JSON.parse(localStorage.getItem(LocalStorageKeys.RatedMovies) ?? "[]")
    : [],
};

interface RatedMoviesProviderProps {
  children: ReactNode;
}

export const RatedMoviesProvider = ({ children }: RatedMoviesProviderProps) => {
  const [ratedMovies, dispatch] = useReducer(ratedMoviesReducer, initialData);

  return (
    <RatedMoviesContext.Provider value={ratedMovies}>
      <RatedMoviesDispatchContext.Provider value={dispatch}>
        {children}
      </RatedMoviesDispatchContext.Provider>
    </RatedMoviesContext.Provider>
  );
};
