import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./bread-crumbs.module.scss";
import { memo } from "react";
import { Anchor, Breadcrumbs as MantineBreadcrumbs } from "@mantine/core";

export enum BreadCrumbsTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface BreadCrumbItems {
  title: string;
  href?: string;
}

interface BreadCrumbsProps {
  className?: string;
  items: BreadCrumbItems[];
}

export const BreadCrumbs = memo((props: BreadCrumbsProps) => {
  const { className, items, ...otherProps } = props;

  const renderList = items.map((item, index) => {
    return item.href ? (
      <Anchor href={item.href} key={index}>
        {item.title}
      </Anchor>
    ) : (
      <div className={cls.title}>{item.title}</div>
    );
  });

  return (
    <MantineBreadcrumbs
      className={classNames(cls.breadCrumbs, {}, [className])}
      {...otherProps}
    >
      {renderList}
    </MantineBreadcrumbs>
  );
});
