import { classNames } from "@/shared/lib/classNames/classNames";
import { ReactNode, memo, useEffect, useState } from "react";
import Image from "next/image";

interface ImgProps {
  className?: string;
  src: string;
  alt: string;
  height: number;
  width: number;
  loadingComp: ReactNode;
  errorComp: ReactNode;
}

export const Img = memo((props: ImgProps) => {
  const { className, loadingComp, errorComp, ...otherProps } = props;
  const [isImgLoadedWithError, setIsImgLoadedWithError] = useState(false);
  const [isImgLoading, setIsLoading] = useState(true);

  return (
    <div className={classNames("", {}, [className])}>
      {isImgLoading ? loadingComp : null}
      {isImgLoadedWithError ? (
        errorComp
      ) : (
        <Image
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setIsImgLoadedWithError(true);
          }}
          {...otherProps}
        />
      )}
    </div>
  );
});
