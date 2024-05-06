import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./card.module.scss";
import { ReactNode, memo } from "react";
import { Card as MantineCard } from "@mantine/core";

export enum CardSize {
  S = "sm",
  M = "md",
  L = "lg",
}

interface CardProps {
  className?: string;
  size?: CardSize;
  children: ReactNode;
}

export const Card = memo((props: CardProps) => {
  const { className, children, size = CardSize.M, ...otherProps } = props;

  return (
    <MantineCard
      className={classNames(cls.card, {}, [className, cls[size]])}
      {...otherProps}
    >
      {children}
    </MantineCard>
  );
});
