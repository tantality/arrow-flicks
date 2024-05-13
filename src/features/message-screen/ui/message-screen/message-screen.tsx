import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./message-screen.module.scss";
import { ReactNode, memo, MouseEvent } from "react";
import { Stack } from "@mantine/core";
import { FilledButton } from "@/shared/ui/filled-button";

interface ButtonProps {
  text: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

interface MessageScreenProps {
  className?: string;
  gap?: string;
  justify?: React.CSSProperties["justifyContent"];
  buttonProps?: ButtonProps;
  img: ReactNode;
  message: string;
}

export const MessageScreen = memo((props: MessageScreenProps) => {
  const {
    className,
    img,
    message,
    justify = "flex-start",
    gap = "1rem",
    buttonProps,
    ...otherProps
  } = props;

  return (
    <Stack
      className={classNames(cls.messageScreen, {}, [className])}
      gap={gap}
      align="center"
      justify={justify}
      {...otherProps}
    >
      {img}
      <Stack gap="1rem" align="center">
        <div className={cls.message}> {message}</div>
        {buttonProps ? (
          <FilledButton onClick={buttonProps.onClick}>
            {buttonProps.text}
          </FilledButton>
        ) : null}
      </Stack>
    </Stack>
  );
});
