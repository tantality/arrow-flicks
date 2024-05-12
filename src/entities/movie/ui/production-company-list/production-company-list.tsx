import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { ProductionCompanyDto } from "../../model/types/movie-details";
import { Stack } from "@mantine/core";
import { ProductionCompanyItem } from "../production-company-item/production-company-item";

interface ProductionCompanyListProps {
  className?: string;
  production_companies?: ProductionCompanyDto[];
}

export const ProductionCompanyList = memo(
  (props: ProductionCompanyListProps) => {
    const { className, production_companies, ...otherProps } = props;

    if (!production_companies || production_companies.length < 1) {
      return null;
    }

    return (
      <Stack
        className={classNames("", {}, [className])}
        gap={"0.75rem"}
        justify="flex-start"
        {...otherProps}
      >
        {production_companies.map((company) => (
          <ProductionCompanyItem key={company.id} company={company} />
        ))}
      </Stack>
    );
  }
);
