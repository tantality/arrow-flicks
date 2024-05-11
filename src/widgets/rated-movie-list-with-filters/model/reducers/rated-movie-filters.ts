import { RatedMovieFiltersState } from "../contexts/rated-movie-filters";
import {
  RatedMovieFiltersActionTypes,
  RatedMovieFiltersActions,
} from "../types/rated-movie-filters";

export function ratedMovieFiltersReducer(
  state: RatedMovieFiltersState,
  action: RatedMovieFiltersActions
): RatedMovieFiltersState {
  switch (action.type) {
    case RatedMovieFiltersActionTypes.SetTitle: {
      return { ...state, title: action.payload };
    }
    case RatedMovieFiltersActionTypes.ResetFilters: {
      return {
        ...state,
        title: "",
      };
    }
    case RatedMovieFiltersActionTypes.FilterMovies: {
      return {
        ...state,
       toFilter: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
