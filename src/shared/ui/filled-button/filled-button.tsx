import { classNames } from "../../lib/classNames/classNames";
import cls from "./filled-button.module.scss";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import { Button } from "@mantine/core";

export enum FilledButtonSize {
  M = "md",
  S = "sm",
}

interface FilledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: FilledButtonSize;
  children: ReactNode;
}

export const FilledButton = forwardRef<HTMLButtonElement, FilledButtonProps>(
  (props, ref) => {
    const {
      className,
      size = FilledButtonSize.M,
      children,
      ...otherProps
    } = props;

    return (
      <Button
        ref={ref}
        type="button"
        variant="filled"
        size={size}
        className={classNames(cls.filledButton, {}, [className])}
        {...otherProps}
      >
        {children}
      </Button>
    );
  }
);
