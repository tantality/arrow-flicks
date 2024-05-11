import { classNames } from "@/shared/lib/classNames/classNames";
import { ReactNode, memo, useState } from "react";
import cls from "./img.module.scss";
import Image from "next/image";

interface ImgProps {
  className?: string;
  src?: string | null;
  alt: string;
  height: number;
  width: number;
  loadingComp: ReactNode;
  placeholder: ReactNode;
}

export const Img = memo((props: ImgProps) => {
  const { className, src, loadingComp, placeholder, ...otherProps } = props;
  const [isImgLoadedWithError, setIsImgLoadedWithError] = useState(false);
  const [isImgLoading, setIsLoading] = useState(true);

  if (!src) {
    return null;
  }

  const mods = {
    [cls.isHidden]: isImgLoading,
    [cls.isVisible]: !isImgLoading,
  };

  return (
    <>
      {isImgLoading ? loadingComp : null}
      {isImgLoadedWithError && !isImgLoading ? (
        placeholder
      ) : (
        <Image
          src={src}
          className={classNames(cls.img, mods, [className])}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setIsImgLoadedWithError(true);
          }}
          {...otherProps}
        />
      )}
    </>
  );
});
