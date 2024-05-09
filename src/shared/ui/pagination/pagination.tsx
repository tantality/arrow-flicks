import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./pagination.module.scss";
import { memo } from "react";
import {
  Pagination as MantinePagination,
  PaginationProps as MantinePaginationProps,
} from "@mantine/core";

type PickedMantinePaginationProps = Pick<
  MantinePaginationProps,
  "value" | "total" | "onChange"
>;

interface PaginationProps extends PickedMantinePaginationProps {
  className?: string;
}

export const Pagination = memo((props: PaginationProps) => {
  const { className, ...otherProps } = props;

  return (
    <MantinePagination
      className={classNames(cls.pagination, {}, [className])}
      {...otherProps}
    ></MantinePagination>
  );
});
