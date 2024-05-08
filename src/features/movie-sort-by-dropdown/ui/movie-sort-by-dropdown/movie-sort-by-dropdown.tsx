import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { Dropdown } from "@/shared/ui/dropdown";
import { InputWrapper } from "@/shared/ui/form/input-wrapper";
import { movieSortByDropdownOptions } from "../../const/movie-sort-by-dropdown-options";

interface MovieSortByDropdownProps {
  className?: string;
  value?: string | null;
  onChange?: (value: string | null) => void;
}

export const MovieSortByDropdown = memo((props: MovieSortByDropdownProps) => {
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
});
