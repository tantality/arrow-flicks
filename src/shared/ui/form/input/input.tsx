import { TextInput, TextInputProps } from "@mantine/core";
import { classNames } from "../../../lib/classNames/classNames";
import cls from "./input.module.scss";
import { memo } from "react";

interface InputProps extends TextInputProps {
  className?: string;
}

export const Input = memo((props: InputProps) => {
  const { className, ...otherProps } = props;

  return (
    <TextInput
      className={classNames(cls.input, {}, [className])}
      {...otherProps}
    ></TextInput>
  );
});
