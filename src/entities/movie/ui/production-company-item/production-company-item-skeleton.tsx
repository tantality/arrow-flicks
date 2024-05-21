import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./production-company-item.module.scss";
import { memo } from "react";
import { Group, Skeleton } from "@mantine/core";

interface ProductionCompanyItemSkeletonProps {
  className?: string;
}

export const ProductionCompanyItemSkeleton = memo(
  (props: ProductionCompanyItemSkeletonProps) => {
    const { className, ...otherProps } = props;

    return (
      <Group
        gap={"0.5rem"}
        align="center"
        wrap="nowrap"
        className={classNames(cls.productionCompanyItem, {}, [
          className,
          cls.skeleton,
        ])}
        {...otherProps}
      >
        <Skeleton height={40} width={40} className={cls.logo} circle />
        <Skeleton className={cls.companyName} height="16px" />
      </Group>
    );
  }
);
