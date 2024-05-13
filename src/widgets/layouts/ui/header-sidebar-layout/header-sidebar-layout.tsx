import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./header-sidebar-layout.module.scss";
import { ReactElement, ReactNode, cloneElement, memo } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { Container } from "@mantine/core";

interface HeaderSidebarLayoutProps {
  className?: string;
  sidebar: ReactElement;
  header: ReactElement;
  content: ReactNode;
  maxWidth?: string;
}

export const HeaderSidebarLayout = memo((props: HeaderSidebarLayoutProps) => {
  const {
    className,
    content,
    sidebar,
    header,
    maxWidth = "980px",
    ...otherProps
  } = props;

  const matches = useMediaQuery("(max-width: 1000px)");

  const clonedSidebar = cloneElement(sidebar, { className: cls.layoutSidebar });
  const clonedHeader = cloneElement(header, { className: cls.layoutHeader });

  return (
    <div
      className={classNames(cls.headerSidebarLayout, {}, [className])}
      {...otherProps}
    >
      {matches ? clonedHeader : clonedSidebar}
      <div className={cls.layoutPage}>
        <Container className={cls.pageContainer} size={maxWidth}>
          {content}
        </Container>
      </div>
    </div>
  );
});
