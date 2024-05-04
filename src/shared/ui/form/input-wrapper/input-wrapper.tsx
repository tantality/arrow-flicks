import { classNames } from "../../../lib/classNames/classNames";
import cls from "./input-wrapper.module.scss";
import { ReactNode, memo } from "react";
import {
  InputWrapper as MantineInputWrapper,
  InputWrapperProps as MantineInputWrapperProps,
} from "@mantine/core";

type PickedMantineInputWrapperProps = Pick<
  MantineInputWrapperProps,
  "label" | "id" | "children"
>;

interface InputWrapperProps extends PickedMantineInputWrapperProps {
  className?: string;
}

export const InputWrapper = memo((props: InputWrapperProps) => {
  const { className, children, ...otherProps } = props;

  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
      <MantineInputWrapper {...otherProps}>{children}</MantineInputWrapper>
    </div>
  );
});
