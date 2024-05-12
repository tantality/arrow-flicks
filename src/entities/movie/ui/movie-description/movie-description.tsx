import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./movie-description.module.scss";
import { memo } from "react";
import { Card, CardSize } from "@/shared/ui/card";
import { TitledMovieDescriptionBlock } from "../titled-movie-description-block/titled-movie-description-block";
import {
  ProductionCompanyDto,
  VideoDto,
} from "../../model/types/movie-details";
import { ProductionCompanyList } from "../production-company-list/production-company-list";
import { DividedItemList } from "@/shared/ui/divided-item-list";
import { YoutubeVideo } from "@/shared/ui/youtube-video";

interface MovieDescriptionProps {
  className?: string;
  overview?: string;
  production_companies?: ProductionCompanyDto[];
  trailer?: VideoDto | null;
}

export const MovieDescription = memo((props: MovieDescriptionProps) => {
  const { className, overview, trailer, production_companies, ...otherProps } =
    props;

  return (
    <Card
      size={CardSize.L}
      className={classNames(cls.movieDescription, {}, [className])}
      {...otherProps}
    >
      <DividedItemList gap="1.25rem">
        {trailer ? (
          <TitledMovieDescriptionBlock title={"Trailer"}>
            <YoutubeVideo
              className={cls.trailer}
              height="281"
              videoKey={trailer.key}
            />
          </TitledMovieDescriptionBlock>
        ) : null}
        {overview ? (
          <TitledMovieDescriptionBlock title={"Description"}>
            <div>{overview}</div>
          </TitledMovieDescriptionBlock>
        ) : null}
        {production_companies && production_companies.length > 0 ? (
          <TitledMovieDescriptionBlock title={"Production"}>
            <ProductionCompanyList
              production_companies={production_companies}
            />
          </TitledMovieDescriptionBlock>
        ) : null}
      </DividedItemList>
    </Card>
  );
});
