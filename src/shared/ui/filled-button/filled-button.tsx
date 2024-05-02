import { classNames } from "../../lib/classNames/classNames";
import cls from "./filled-button.module.scss";
import { ButtonHTMLAttributes, ReactNode, memo } from "react";
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

export const FilledButton = memo((props: FilledButtonProps) => {
  const { className, size = FilledButtonSize.M, ...otherProps } = props;

  return (
    <Button
      type="button"
      variant="filled"
      size={size}
      className={classNames(cls.filledButton, {}, [className])}
      {...otherProps}
    />
  );
});
