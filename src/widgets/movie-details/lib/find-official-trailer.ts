import { VideoDto, VideoTypes } from "@/entities/movie";

export const findOfficialTrailer = (videos?: VideoDto[]): VideoDto | null => {
  if (!videos || videos.length === 0) {
    return null;
  }

  const officialVideo = videos.find(
    (video) => video.official === true && video.type == VideoTypes.Trailer
  );

  return officialVideo ? officialVideo : null;
};
