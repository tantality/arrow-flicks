import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { InputWrapper } from "@/shared/ui/form/input-wrapper";
import { Dropdown } from "@/shared/ui/dropdown";
import { useMovieGenresQuery } from "../../api/use-movie-genres-query";

interface MovieGenreDropdownProps {
  className?: string;
  value?: string | null;
  onChange?: (value: string | null) => void;
}

export const MovieGenreDropdown = memo((props: MovieGenreDropdownProps) => {
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
});
