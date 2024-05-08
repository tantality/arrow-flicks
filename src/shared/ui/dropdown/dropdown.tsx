import { classNames } from "../../lib/classNames/classNames";
import cls from "./dropdown.module.scss";
import { memo } from "react";
import { Select, SelectProps } from "@mantine/core";
import DownArrowIcon from "@/shared/assets/icons/down-arrow-m.svg";

type PickedMantineSelectProps = Pick<
  SelectProps,
  | "placeholder"
  | "data"
  | "style"
  | "disabled"
  | "value"
  | "onChange"
  | "allowDeselect"
>;

interface DropdownProps extends PickedMantineSelectProps {
  className?: string;
}

export const Dropdown = memo((props: DropdownProps) => {
  const { className, data, ...otherProps } = props;

  const comboBoxProps = { size: "md" };

  return (
    <Select
      withCheckIcon={false}
      comboboxProps={comboBoxProps}
      data={data}
      className={classNames(cls.dropdown, {}, [className])}
      rightSection={<DownArrowIcon />}
      rightSectionWidth={48}
      {...otherProps}
    />
  );
});
