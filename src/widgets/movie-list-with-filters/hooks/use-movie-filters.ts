import { MouseEvent, useCallback, useEffect, useMemo } from "react";
import { doesObjContainEmptyProperties } from "../lib/does-obj-contain-empty-properties";
import { usePaginationPage } from "@/app/providers/PaginationPageProvider";
import {
  MovieFiltersErrors,
  MovieFiltersYup,
} from "../model/validations/movie-filters-schema";
import { Control, FieldErrors, useFormContext } from "react-hook-form";
import { useDebouncedCallback } from "@mantine/hooks";

interface UseMovieFiltersType {
  data: MovieFiltersYup;
  setGenreId: (value: string | null) => void;
  setSortBy: (value: any) => void;
  setReleaseYear: (value: string | null) => void;
  setFromRating: (value: any) => void;
  setToRating: (value: any) => void;
  resetFilters: (e?: MouseEvent<HTMLButtonElement>) => void;
  areFiltersEmpty: boolean;
  setErrors: (errorMessage: MovieFiltersErrors) => void;
  control: Control<MovieFiltersYup>;
  clientValidationErrors: FieldErrors<MovieFiltersYup>;
  areThereClientValidationErrors: boolean;
}

const delay = 1200;

export const useMovieFilters = (): UseMovieFiltersType => {
  const { setPage } = usePaginationPage();

  const {
    control,
    reset,
    setValue,
    formState: { errors: clientValidationErrors },
    trigger,
    watch,
    getValues,
    setError,
  } = useFormContext<MovieFiltersYup>();

  useEffect(() => {
    trigger("fromRating");
  }, [watch("toRating")]);

  useEffect(() => {
    trigger("toRating");
  }, [watch("fromRating")]);

  useEffect(() => {
    trigger("sortBy");
  }, [watch("sortBy")]);

  useEffect(() => {
    trigger("releaseYear");
  }, [watch("releaseYear")]);

  useEffect(() => {
    trigger("genreId");
  }, [watch("genreId")]);

  const { sortBy, ...filters } = getValues();

  const areFiltersEmpty = useMemo(
    () => doesObjContainEmptyProperties(filters),
    [
      watch("genreId"),
      watch("releaseYear"),
      watch("toRating"),
      watch("fromRating"),
      watch("sortBy"),
    ]
  );

  const validationErrorAmount = Object.keys(clientValidationErrors).length;

  const areThereClientValidationErrors = useMemo(
    () => validationErrorAmount !== 0,
    [validationErrorAmount]
  );

  const setGenreId = useCallback(
    (value: string | null) => {
      setValue("genreId", value);
      setPage(1);
    },
    [control.getFieldState("genreId")]
  );

  const setSortBy = useCallback(
    (value: any) => {
      setValue("sortBy", value);
      setPage(1);
    },
    [control.getFieldState("sortBy")]
  );

  const setReleaseYear = useCallback(
    (value: string | null) => {
      setValue("releaseYear", value);
      setPage(1);
    },
    [control.getFieldState("releaseYear")]
  );

  const setFromRating = useDebouncedCallback(
    useCallback(
      (value: any) => {
        setValue("fromRating", value);
        setPage(1);
      },
      [control.getFieldState("fromRating")]
    ),
    delay
  );

  const setToRating = useDebouncedCallback(
    useCallback(
      (value: any) => {
        setValue("toRating", value);
        setPage(1);
      },
      [control.getFieldState("toRating")]
    ),
    delay
  );

  const resetFilters = useCallback(() => {
    reset({
      genreId: null,
      releaseYear: null,
      fromRating: "" as unknown as number,
      toRating: "" as unknown as number,
      sortBy: getValues().sortBy,
    });
    setPage(1);
  }, []);

  const setErrors = (errorMessage: MovieFiltersErrors) => {
    if (errorMessage.sortBy) {
      setError("sortBy", { message: errorMessage.sortBy });
    }
    if (errorMessage.releaseYear) {
      setError("releaseYear", { message: errorMessage.releaseYear });
    }
    if (errorMessage.toRating) {
      setError("toRating", { message: errorMessage.toRating });
    }
    if (errorMessage.fromRating) {
      setError("fromRating", { message: errorMessage.fromRating });
    }
    if (errorMessage.genreId) {
      setError("genreId", { message: errorMessage.genreId });
    }
  };

  return {
    data: getValues(),
    areFiltersEmpty,
    control,
    setGenreId,
    setReleaseYear,
    setFromRating,
    setToRating,
    setSortBy,
    resetFilters,
    setErrors,
    clientValidationErrors,
    areThereClientValidationErrors,
  };
};
