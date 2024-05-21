import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { Stack } from "@mantine/core";
import { ProductionCompanyItemSkeleton } from "../production-company-item/production-company-item-skeleton";

interface ProductionCompanySkeletonListProps {
  className?: string;
  skeletonAmount: number;
}

const getSkeletons = (skeletonAmount: number) =>
  Array(skeletonAmount)
    .fill(0)
    .map((_, ind) => <ProductionCompanyItemSkeleton key={ind} />);

export const ProductionCompanySkeletonList = memo(
  (props: ProductionCompanySkeletonListProps) => {
    const { className, skeletonAmount, ...otherProps } = props;

    return (
      <Stack
        className={classNames("", {}, [className])}
        gap={"0.75rem"}
        justify="flex-start"
        {...otherProps}
      >
        {getSkeletons(skeletonAmount)}
      </Stack>
    );
  }
);
