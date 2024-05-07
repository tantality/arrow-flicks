import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./movie-genre-dropdown.module.scss";
import { memo } from "react";
import { InputWrapper } from "@/shared/ui/form/input-wrapper";
import { Dropdown } from "@/shared/ui/dropdown";

interface MovieGenreDropdownProps {
  className?: string;
}

export const MovieGenreDropdown = memo((props: MovieGenreDropdownProps) => {
  const { className } = props;

  const data = [
    {
      label: "всем привет",
      value: "1",
    },
    {
      label: "всем привет  2",
      value: "2",
    },

    {
      label: "всем привет,минчане?",
      value: "3",
    },
    {
      label: "Thriller",
      value: "Thriller",
    },
    {
      label: "Fantasy",
      value: "Fantasy",
    },
    {
      label: "6",
      value: "6",
    },
    {
      label: "7",
      value: "7",
    },
    {
      label: "8",
      value: "8",
    },
  ];

  return (
    <InputWrapper
      id="genre-dropdown"
      label="Genres"
      className={classNames(cls.movieGenreDropdown, {}, [className])}
    >
      <Dropdown placeholder="Select genre" data={data} />
    </InputWrapper>
  );
});
