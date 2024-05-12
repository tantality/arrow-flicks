import { ReactNode, useMemo } from "react";
import { Divider, Stack } from "@mantine/core";
import { classNames } from "@/shared/lib/classNames/classNames";
import React from "react";

interface DividedItemListProps {
  className?: string;
  children: ReactNode[];
  gap: string;
}

export const DividedItemList = (props: DividedItemListProps) => {
  const { className, gap, children } = props;

  const filteredChildren = useMemo(
    () => children.filter((item) => Boolean(item) as ReactNode),
    [children]
  );

  const lastItemIndex = filteredChildren.length - 1;

  const renderList = useMemo(
    () =>
      filteredChildren.map((item, index) => {
        if (index !== lastItemIndex) {
          return (
            <React.Fragment key={index}>
              {item}
              <Divider />
            </React.Fragment>
          );
        }
        return <React.Fragment key={index}>{item}</React.Fragment>;
      }),
    [children]
  );

  return (
    <Stack gap={gap} className={classNames("", {}, [className])}>
      {renderList}
    </Stack>
  );
};
