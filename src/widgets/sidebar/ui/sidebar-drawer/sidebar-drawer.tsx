import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./sidebar-drawer.module.scss";
import { memo } from "react";
import { Sidebar } from "../sidebar/sidebar";
import { Drawer } from "@mantine/core";

interface SidebarDrawerProps {
  className?: string;
  isOpened: boolean;
  onClose: () => void;
}

export const SidebarDrawer = memo((props: SidebarDrawerProps) => {
  const { className, isOpened, onClose, ...otherProps } = props;

  return (
    <Drawer
      opened={isOpened}
      onClose={onClose}
      className={classNames(cls.sidebarDrawer, {}, [className])}
      {...otherProps}
    >
      <Sidebar className={cls.drawerContent}/>
    </Drawer>
  );
});
