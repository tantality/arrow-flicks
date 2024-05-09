import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./movie-rating-modal.module.scss";
import { memo, useState } from "react";
import { Group, Modal, ModalProps, Rating, Stack } from "@mantine/core";
import { FilledButton } from "@/shared/ui/filled-button";
import { TextButton } from "@/shared/ui/text-button";
import { RatedMovie } from "../../types/movie-rating-card";

interface RateMovieModalProps extends ModalProps {
  className?: string;
  movie: RatedMovie;
}

export const RateMovieModal = memo((props: RateMovieModalProps) => {
  const { className, onClose, movie, ...otherProps } = props;

  const [currentRating, setCurrentRating] = useState<number>(movie.rating ?? 0);

  return (
    <Modal
      className={classNames(cls.rateMovieModal, {}, [className])}
      onClose={onClose}
      title="Your rating"
      size="auto"
      centered
      {...otherProps}
    >
      <Stack className={cls.modalBody} gap="1rem">
        <div className={cls.movieTitle}>{movie.original_title}</div>
        <Rating
          className={cls.rating}
          size="lg"
          count={10}
          value={currentRating}
          onChange={setCurrentRating}
        />
        <Group className={cls.buttons} gap="1rem" align="center">
          <FilledButton onClick={onClose}>Save</FilledButton>
          <TextButton>Remove rating</TextButton>
        </Group>
      </Stack>
    </Modal>
  );
});
