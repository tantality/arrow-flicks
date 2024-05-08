import {
  MovieFiltersActionTypes,
  MovieFiltersActions,
} from "../types/movie-filters";
import { MovieFiltersState } from "../contexts/movie-filters";

export function movieFiltersReducer(
  state: MovieFiltersState,
  action: MovieFiltersActions
): MovieFiltersState {
  switch (action.type) {
    case MovieFiltersActionTypes.SetGenre: {
      return { ...state, genre: action.payload };
    }
    case MovieFiltersActionTypes.SetReleaseYear: {
      return { ...state, releaseYear: action.payload };
    }
    case MovieFiltersActionTypes.SetSortBy: {
      return { ...state, sortBy: action.payload };
    }
    case MovieFiltersActionTypes.SetFromRating: {
      return { ...state, fromRating: action.payload };
    }
    case MovieFiltersActionTypes.SetToRating: {
      return { ...state, toRating: action.payload };
    }
    case MovieFiltersActionTypes.ResetFilters: {
      return {
        ...state,
        toRating: "",
        fromRating: "",
        genre: "",
        releaseYear: "",
      };
    }
    default: {
      return state;
    }
  }
}
