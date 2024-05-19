import { useWindowScroll } from "@mantine/hooks";
import { useEffect } from "react";

export const useScrollToTopOnPageChange = (
  page: number,
  topPosition: number = 0
) => {
  const [, scrollTo] = useWindowScroll();
  useEffect(() => {
    scrollTo({ y: topPosition });
  }, [page]);
};
