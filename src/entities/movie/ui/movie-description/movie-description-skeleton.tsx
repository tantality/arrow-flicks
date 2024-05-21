import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./movie-description.module.scss";
import { memo } from "react";
import { Card, CardSize } from "@/shared/ui/card";
import { DividedItemList } from "@/shared/ui/divided-item-list";
import { Skeleton } from "@mantine/core";
import { TitledMovieDescriptionBlockSkeleton } from "../titled-movie-description-block/titled-movie-description-block-skeleton";
import { ProductionCompanySkeletonList } from "../production-company-list/production-company-list-skeleton";

interface MovieDescriptionSkeletonProps {
  className?: string;
}

export const MovieDescriptionSkeleton = memo(
  (props: MovieDescriptionSkeletonProps) => {
    const { className, ...otherProps } = props;
    const titledBlockProps = { width: "20%", height: "20px" };

    return (
      <Card
        size={CardSize.L}
        className={classNames(cls.movieDescription, {}, [className])}
        {...otherProps}
      >
        <DividedItemList gap="1.25rem">
          <TitledMovieDescriptionBlockSkeleton {...titledBlockProps}>
            <Skeleton className={cls.trailer} height="281" />
          </TitledMovieDescriptionBlockSkeleton>
          <TitledMovieDescriptionBlockSkeleton {...titledBlockProps}>
            <Skeleton height="100px" />
          </TitledMovieDescriptionBlockSkeleton>
          <TitledMovieDescriptionBlockSkeleton {...titledBlockProps}>
            <ProductionCompanySkeletonList skeletonAmount={2} />
          </TitledMovieDescriptionBlockSkeleton>
        </DividedItemList>
      </Card>
    );
  }
);
