import {
  RatedMoviesContext,
  RatedMoviesDispatchContext,
  RatedMoviesState,
} from "../../model/contexts/rated-movies";
import { ReactNode, useEffect, useReducer } from "react";
import { ratedMoviesReducer } from "../../model/reducers/rated-movies";
import { ratedMoviesActions } from "../../model/actions/rated-movies";
import { PaginationPageProvider } from "@/app/providers/PaginationPageProvider";

const initialData: RatedMoviesState = {
  movies: [],
  isInit: false,
};

interface RatedMoviesProviderProps {
  children: ReactNode;
}

export const RatedMoviesProvider = ({ children }: RatedMoviesProviderProps) => {
  const [ratedMovies, dispatch] = useReducer(ratedMoviesReducer, initialData);

  useEffect(() => {
    dispatch(ratedMoviesActions.initMovieRatingStateAction());
  }, []);

  return (
    <PaginationPageProvider>
      <RatedMoviesContext.Provider value={ratedMovies}>
        <RatedMoviesDispatchContext.Provider value={dispatch}>
          {children}
        </RatedMoviesDispatchContext.Provider>
      </RatedMoviesContext.Provider>
    </PaginationPageProvider>
  );
};
