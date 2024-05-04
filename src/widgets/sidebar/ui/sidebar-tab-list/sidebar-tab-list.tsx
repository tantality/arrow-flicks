import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./sidebar-tab-list.module.scss";
import { memo, useState } from "react";
import { Tabs } from "@mantine/core";
import { SidebarTab } from "../sidebar-tab/sidebar-tab";
import Link from "next/link";
import { useRouter } from "next/router";
import { getMovieDetailsRoute } from "@/shared/const/router";
import { SidebarTabItem, SidebarRoutes } from "../../model/types/sidebar";

interface SidebarTabListProps {
  className?: string;
}

const tabItems: SidebarTabItem[] = [
  { label: "Movies", value: SidebarRoutes.MOVIES },
  { label: "Rated movies", value: SidebarRoutes.RATED_MOVIES },
];

export const SidebarTabList = memo((props: SidebarTabListProps) => {
  const { className, ...otherProps } = props;
  const { pathname } = useRouter();

  const value =
    pathname === getMovieDetailsRoute("[id]") ? SidebarRoutes.MOVIES : pathname;

  const [activeTabValue] = useState<string>(value);

  return (
    <div
      className={classNames(cls.sidebarTabList, {}, [className])}
      {...otherProps}
    >
      <Tabs value={activeTabValue} variant="pills">
        <Tabs.List grow>
          {tabItems.map((tab) => (
            <Link href={tab.value} passHref>
              <SidebarTab tab={tab} />
            </Link>
          ))}
        </Tabs.List>
      </Tabs>
    </div>
  );
});
