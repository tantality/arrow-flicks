import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { Dropdown } from "@/shared/ui/dropdown";
import { InputWrapper } from "@/shared/ui/form/input-wrapper";
import { movieSortByDropdownOptions } from "../../const/movie-sort-by-dropdown-options";
import { FieldValues, FieldPath, Control } from "react-hook-form";

interface MovieSortByDropdownProps<T extends FieldValues> {
  className?: string;
  value?: string | null;
  onChange?: (value: string | null) => void;
  error?: string;
  name?: FieldPath<T>;
  control?: Control<T>;
}

const CustomMovieSortByDropdown = <T extends FieldValues>(
  props: MovieSortByDropdownProps<T>
) => {
  const { className } = props;

  return (
    <InputWrapper
      id="sort-by-dropdown"
      label="Sort by"
      className={classNames("", {}, [className])}
    >
      <Dropdown
        placeholder="Select sort"
        data={movieSortByDropdownOptions}
        allowDeselect={false}
        {...props}
      />
    </InputWrapper>
  );
};

export const MovieSortByDropdown = memo(CustomMovieSortByDropdown) as typeof CustomMovieSortByDropdown;