import {
  RatedMoviesContext,
  RatedMoviesDispatchContext,
  RatedMoviesState,
} from "../../model/contexts/rated-movies";
import { ReactNode, useEffect, useReducer } from "react";
import { ratedMoviesReducer } from "../../model/reducers/rated-movies";
import { ratedMoviesActions } from "../../model/actions/rated-movies";

const initialData: RatedMoviesState = {
  movies: [],
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
    <RatedMoviesContext.Provider value={ratedMovies}>
      <RatedMoviesDispatchContext.Provider value={dispatch}>
        {children}
      </RatedMoviesDispatchContext.Provider>
    </RatedMoviesContext.Provider>
  );
};
