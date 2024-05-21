import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./production-company-item.module.scss";
import { memo } from "react";
import { APT_IMG_URL } from "@/shared/const/api";
import { Img } from "@/shared/ui/img";
import { Group, Skeleton } from "@mantine/core";
import { ProductionCompanyDto } from "../../model/types/movie-details";
import NoProductionCompanyLogoIcon from "@/shared/assets/icons/no-production-company-logo.svg";

interface ProductionCompanyItemProps {
  className?: string;
  company: ProductionCompanyDto;
}

const API_IMG_URL = `${APT_IMG_URL}/w45`;

export const ProductionCompanyItem = memo(
  (props: ProductionCompanyItemProps) => {
    const { className, company, ...otherProps } = props;

    return (
      <Group
        gap={"0.5rem"}
        align="center"
        wrap="nowrap"
        className={classNames(cls.productionCompanyItem, {}, [className])}
        {...otherProps}
      >
        <Img
          height={40}
          width={40}
          className={cls.logo}
          src={API_IMG_URL + company.logo_path}
          alt={company.name}
          loadingComp={<Skeleton height={40} width={40} circle />}
          placeholder={<NoProductionCompanyLogoIcon />}
        />
        <div className={cls.companyName}>{company.name}</div>
      </Group>
    );
  }
);
