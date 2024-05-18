import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import { classNames } from "../../../lib/classNames/classNames";
import cls from "./number-input.module.scss";
import {
  NumberInput as MantineNumberInput,
  NumberInputProps as MantineNumberInputProps,
} from "@mantine/core";
import { memo } from "react";

type PickedMantineNumberInputProps = Pick<
  MantineNumberInputProps,
  | "placeholder"
  | "max"
  | "min"
  | "value"
  | "defaultValue"
  | "onChange"
  | "style"
  | "id"
  | "error"
>;

interface NumberInputProps<T extends FieldValues>
  extends PickedMantineNumberInputProps {
  className?: string;
  name?: FieldPath<T>;
  control?: Control<T>;
}

const CustomNumberInput = <T extends FieldValues>(
  props: NumberInputProps<T>
) => {
  const { className, control, name, ...otherProps } = props;

  if (control && name) {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <MantineNumberInput
            size="md"
            className={classNames(cls.numberInput, {}, [className])}
            {...otherProps}
            {...field}
          />
        )}
      />
    );
  }

  return (
    <MantineNumberInput
      size="md"
      className={classNames(cls.numberInput, {}, [className])}
      {...otherProps}
    />
  );
};

export const NumberInput = memo(CustomNumberInput) as typeof CustomNumberInput;
