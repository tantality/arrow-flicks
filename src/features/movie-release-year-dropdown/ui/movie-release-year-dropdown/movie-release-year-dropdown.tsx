import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { Dropdown } from "@/shared/ui/dropdown";
import { movieReleaseYearDropdownOptions } from "../../const/movie-release-year-dropdown-options";
import { InputWrapper } from "@/shared/ui/form/input-wrapper";
import { FieldPath, Control, FieldValues } from "react-hook-form";

interface MovieReleaseYearDropdownProps<T extends FieldValues> {
  className?: string;
  value?: string | null;
  onChange?: (value: string | null) => void;
  error?: string;
  name?: FieldPath<T>;
  control?: Control<T>;
}

const CustomMovieReleaseYearDropdown = <T extends FieldValues>(
  props: MovieReleaseYearDropdownProps<T>
) => {
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
};

export const MovieReleaseYearDropdown = memo(
  CustomMovieReleaseYearDropdown
) as typeof CustomMovieReleaseYearDropdown;
