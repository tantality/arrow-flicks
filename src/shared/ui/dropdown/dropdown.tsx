import { classNames } from "../../lib/classNames/classNames";
import cls from "./dropdown.module.scss";
import { Select, SelectProps } from "@mantine/core";
import DownArrowIcon from "@/shared/assets/icons/down-arrow-m.svg";
import { FieldValues, Control, Controller, FieldPath } from "react-hook-form";
import { memo } from "react";

type PickedMantineSelectProps = Pick<
  SelectProps,
  | "placeholder"
  | "data"
  | "style"
  | "disabled"
  | "value"
  | "onChange"
  | "allowDeselect"
  | "error"
>;

interface DropdownProps<T extends FieldValues>
  extends PickedMantineSelectProps {
  className?: string;
  name?: FieldPath<T>;
  control?: Control<T>;
}

const CustomDropdown = <T extends FieldValues>(props: DropdownProps<T>) => {
  const { className, data, control, name, ...otherProps } = props;

  const comboBoxProps = { size: "md" };

  if (control && name) {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Select
            withCheckIcon={false}
            comboboxProps={comboBoxProps}
            data={data}
            className={classNames(cls.dropdown, {}, [className])}
            rightSection={<DownArrowIcon />}
            rightSectionWidth={48}
            {...field}
            {...otherProps}
          />
        )}
      />
    );
  }

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
};

export const Dropdown = memo(CustomDropdown) as typeof CustomDropdown;
