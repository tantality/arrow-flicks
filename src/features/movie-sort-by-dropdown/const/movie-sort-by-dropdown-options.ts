import { DropdownOption } from "@/shared/types/dropdown-option.type";

export enum MovieSortByValues{ 
  PopularityDesc = "popularity.desc",
  PopularityAsc = "popularity.asc",
  VoteAverageDesc = "vote_average.desc",
  VoteAverageAsc = "vote_average.asc",
  VoteCountDesc = "vote_count.desc",
  VoteCountAsc = "vote_count.asc",
  RevenueDesc = "revenue.desc",
  RevenueAsc = "revenue.asc",
  PrimaryReleaseDateDesc = "primary_release_date.desc",
  PrimaryReleaseDateAsc = "primary_release_date.asc",
}

export const movieSortByDropdownOptions: DropdownOption[] = [
  {
    value: MovieSortByValues.PopularityDesc,
    label: "Most Popular",
  },
  {
    value: MovieSortByValues.PopularityAsc,
    label: "Least Popular",
  },
  {
    value: MovieSortByValues.VoteAverageDesc,
    label: "Most Rated",
  },
  {
    value: MovieSortByValues.VoteAverageAsc,
    label: "Least Rated",
  },
  {
    value:  MovieSortByValues.VoteCountDesc,
    label: "Most Voted",
  },
  {
    value: MovieSortByValues.VoteCountAsc,
    label: "Least Voted",
  },
  {
    value: MovieSortByValues.RevenueDesc,
    label: "Most Profitable",
  },
  {
    value: MovieSortByValues.RevenueAsc,
    label: "Least Profitable",
  },
  {
    value: MovieSortByValues.PrimaryReleaseDateDesc,
    label: "Most New",
  },
  {
    value: MovieSortByValues.PrimaryReleaseDateAsc,
    label: "Least New",
  },
];
