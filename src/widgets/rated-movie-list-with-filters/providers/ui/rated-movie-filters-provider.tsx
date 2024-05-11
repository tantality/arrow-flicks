import {
  RatedMovieFiltersContext,
  RatedMovieFiltersDispatchContext,
  RatedMovieFiltersState,
} from "../../model/contexts/rated-movie-filters";
import { ratedMovieFiltersReducer } from "../../model/reducers/rated-movie-filters";
import { ReactNode, useReducer } from "react";

export const initialData: RatedMovieFiltersState = {
  title: "",
  toFilter: false,
};

interface RatedMovieFiltersProviderProps {
  children: ReactNode;
}

export const RatedMovieFiltersProvider = ({
  children,
}: RatedMovieFiltersProviderProps) => {
  const [data, dispatch] = useReducer(ratedMovieFiltersReducer, initialData);

  return (
    <RatedMovieFiltersContext.Provider value={data}>
      <RatedMovieFiltersDispatchContext.Provider value={dispatch}>
        {children}
      </RatedMovieFiltersDispatchContext.Provider>
    </RatedMovieFiltersContext.Provider>
  );
};
