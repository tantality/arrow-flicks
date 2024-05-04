import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./sidebar-tab.module.scss";
import { memo } from "react";
import { SidebarTabItem } from "../../model/types/sidebar";
import { Tabs } from "@mantine/core";

interface SidebarTabProps {
  className?: string;
  tab: SidebarTabItem;
}

export const SidebarTab = memo((props: SidebarTabProps) => {
  const { className, tab, ...otherProps } = props;

  return (
    <div
      className={classNames(cls.sidebarTab, {}, [className])}
      {...otherProps}
    >
      <Tabs.Tab value={tab.value}>{tab.label}</Tabs.Tab>
    </div>
  );
});
