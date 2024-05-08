import { Button, ButtonProps as MantineButtonProps } from "@mantine/core";
import { classNames } from "../../lib/classNames/classNames";
import cls from "./text-button.module.scss";
import { ButtonHTMLAttributes, memo } from "react";

type ButtonProps = Pick<MantineButtonProps, "disabled" | "style" | "children"> &
  ButtonHTMLAttributes<HTMLButtonElement>;

interface TextButtonProps extends ButtonProps {
  className?: string;
}

export const TextButton = memo((props: TextButtonProps) => {
  const { className, children, ...otherProps } = props;

  return (
    <Button
      variant="transparent"
      size="md"
      className={classNames(cls.textButton, {}, [className])}
      {...otherProps}
    >
      {children}
    </Button>
  );
});
