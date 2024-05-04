import { classNames } from "../../lib/classNames/classNames";
import cls from "./dropdown.module.scss";
import { memo } from "react";
import { Select, SelectProps } from "@mantine/core";
import DownArrowIcon from "@/shared/assets/icons/down-arrow-m.svg";

interface DropdownProps extends SelectProps {
  className?: string;
}

export const Dropdown = memo((props: DropdownProps) => {
  const { className, ...otherProps } = props;

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

  const comboBoxProps = { size: "md" };

  return (
    <Select
      withCheckIcon={false}
      comboboxProps={comboBoxProps}
      data={data}
      // size="md"
      // limit={6}
      // withScrollArea={true}
      className={classNames(cls.dropdown, {}, [className])}
      // placeholder={placeholder ?? ""}
      // size={SIZE.MD}
      rightSection={<DownArrowIcon />}
      rightSectionWidth={48}
      // maxDropdownHeight={267}
      {...otherProps}
    />
  );
});
