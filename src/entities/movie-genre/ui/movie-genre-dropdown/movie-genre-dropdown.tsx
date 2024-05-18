import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { InputWrapper } from "@/shared/ui/form/input-wrapper";
import { Dropdown } from "@/shared/ui/dropdown";
import { useMovieGenresQuery } from "../../api/use-movie-genres-query";
import { Control, FieldPath, FieldValues } from "react-hook-form";

interface MovieGenreDropdownProps<T extends FieldValues> {
  className?: string;
  value?: string | null;
  onChange?: (value: string | null) => void;
  error?: string;
  name?: FieldPath<T>;
  control?: Control<T>;
}

const CustomMovieGenreDropdown = <T extends FieldValues>(
  props: MovieGenreDropdownProps<T>
) => {
  const { className } = props;

  const { data, isLoading, error } = useMovieGenresQuery();

  if (error) {
    return null;
  }

  return (
    <InputWrapper
      id="genre-dropdown"
      label="Genres"
      className={classNames("", {}, [className])}
    >
      <Dropdown
        placeholder="Select genre"
        data={data}
        disabled={isLoading}
        {...props}
      />
    </InputWrapper>
  );
};

export const MovieGenreDropdown = memo(
  CustomMovieGenreDropdown
) as typeof CustomMovieGenreDropdown;
