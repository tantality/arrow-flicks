import { DropdownOption } from "@/shared/types/dropdown-option.type";

export const movieSortByDropdownOptions: DropdownOption[] = [
  {
    value: "popularity.desc",
    label: "Most popular",
  },
  {
    value: "popularity.asc",
    label: "Least Popular",
  },
  {
    value: "vote_average.desc",
    label: "Most Rated",
  },
  {
    value: "vote_average.asc",
    label: "Least Rated",
  },
  {
    value: "vote_count.desc",
    label: "Most Voted",
  },
  {
    value: "vote_count.asc",
    label: "Least Voted",
  },
  {
    value: "revenue.desc",
    label: "Most Profitable",
  },
  {
    value: "revenue.asc",
    label: "Least Profitable",
  },
  {
    value: "primary_release_date.desc",
    label: "Most New",
  },
  {
    value: "primary_release_date.asc",
    label: "Least New",
  },
  // {
  //   value: "original_title.asc",
  //   label: "Least",
  // },
  // {
  //   value: "original_title.desc",
  //   label: "Most",
  // },
];
