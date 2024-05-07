import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { Dropdown } from "@/shared/ui/dropdown";
import { movieReleaseYearDropdownOptions } from "../../const/movie-release-year-dropdown-options";
import { InputWrapper } from "@/shared/ui/form/input-wrapper";

interface MovieReleaseYearDropdownProps {
  className?: string;
  value?: string | null;
  onChange?: (value: string | null) => void;
}

export const MovieReleaseYearDropdown = memo(
  (props: MovieReleaseYearDropdownProps) => {
    const { className } = props;

    return (
      <InputWrapper
        id="release-year-dropdown"
        label="Release year"
        className={classNames("", {}, [className])}
      >
        <Dropdown
          placeholder="Select release year"
          data={movieReleaseYearDropdownOptions}
          {...props}
        />
      </InputWrapper>
    );
  }
);
