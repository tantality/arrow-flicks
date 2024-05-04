import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./sidebar.module.scss";
import { memo } from "react";
import { Logo } from "@/shared/ui/logo";
import { SidebarTabList } from "../sidebar-tab-list/sidebar-tab-list";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className, ...otherProps } = props;

  return (
    <aside className={classNames(cls.sidebar, {}, [className])} {...otherProps}>
      <div className={cls.container}>
        <Logo />
        <SidebarTabList />
      </div>
    </aside>
  );
});
