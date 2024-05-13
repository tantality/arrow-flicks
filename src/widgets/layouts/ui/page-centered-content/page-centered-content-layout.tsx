import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./page-centered-content-layout.module.scss";
import { ReactNode, memo } from "react";
import { Stack } from "@mantine/core";

interface PageCenteredContentLayoutProps {
  className?: string;
  gap?: string;
  header?: ReactNode;
  content: ReactNode;
}

export const PageCenteredContentLayout = memo(
  (props: PageCenteredContentLayoutProps) => {
    const { className, gap = "0", header, content, ...otherProps } = props;

    return (
      <Stack
        gap={gap}
        className={classNames(cls.pageCenteredContentLayout, {}, [className])}
        {...otherProps}
      >
        {header ? header : null}
        <div className={cls.content}>{content}</div>
      </Stack>
    );
  }
);
