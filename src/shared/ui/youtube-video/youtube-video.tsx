import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./youtube-video.module.scss";
import { memo } from "react";

interface YoutubeVideoProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  videoKey: string;
}

const youtubeVideoSrc = "https://www.youtube.com/embed/";

export const YoutubeVideo = memo((props: YoutubeVideoProps) => {
  const { className, videoKey, ...otherProps } = props;

  return (
    <iframe
      className={classNames(cls.youtubeVideo, {}, [className])}
      src={youtubeVideoSrc + videoKey}
      {...otherProps}
    />
  );
});
