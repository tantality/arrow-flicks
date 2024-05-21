import { Stack } from "@mantine/core";
import { DefaultErrorScreen as DefaultErrorScreenFeature } from "@/features/message-screen";
import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

interface DefaultErrorScreenProps {
  className?: string;
}

export const DefaultErrorScreen = memo((props: DefaultErrorScreenProps) => {
  const { className } = props;

  return (
    <Stack
      justify="center"
      h="100%"
      align="center"
      className={classNames("", {}, [className])}
    >
      <DefaultErrorScreenFeature />
    </Stack>
  );
});
