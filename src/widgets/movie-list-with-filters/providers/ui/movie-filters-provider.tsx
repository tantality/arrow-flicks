import { MovieSortByValues } from "@/features/movie-sort-by-dropdown";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import { ReactNode } from "react";
import {
  MovieFiltersYup,
  movieFiltersSchema,
} from "../../model/validations/movie-filters-schema";

interface MovieFiltersProviderProps {
  children: ReactNode;
}

export const MovieFiltersProvider = ({
  children,
}: MovieFiltersProviderProps) => {
  const methods = useForm<MovieFiltersYup>({
    mode: "all",
    resolver: yupResolver(movieFiltersSchema),
    defaultValues: {
      sortBy: MovieSortByValues.PopularityDesc,
    },
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};
