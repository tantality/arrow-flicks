import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./header-sidebar-layout.module.scss";
import { ReactElement, ReactNode, cloneElement, memo } from "react";
import { Container } from "@mantine/core";
import { useWindowSize } from "@/shared/hooks/use-window-size";

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

  const [width] = useWindowSize();

  const clonedSidebar = cloneElement(sidebar, { className: cls.layoutSidebar });
  const clonedHeader = cloneElement(header, { className: cls.layoutHeader });

  const layoutPart = width > 1200 ? clonedSidebar : clonedHeader;

  return (
    <div
      className={classNames(cls.headerSidebarLayout, {}, [className])}
      {...otherProps}
    >
      {layoutPart}
      <div className={cls.layoutPage}>
        <Container className={cls.pageContainer} size={maxWidth}>
          {content}
        </Container>
      </div>
    </div>
  );
});
