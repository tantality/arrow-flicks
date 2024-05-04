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
>;

interface NumberInputProps extends PickedMantineNumberInputProps {
  className?: string;
}

export const NumberInput = memo((props: NumberInputProps) => {
  const { className, ...otherProps } = props;

  return (
    <MantineNumberInput
      size="md"
      className={classNames(cls.numberInput, {}, [className])}
      {...otherProps}
    />
  );
});
