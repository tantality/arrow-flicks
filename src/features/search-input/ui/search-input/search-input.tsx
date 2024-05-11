import { classNames } from "@/shared/lib/classNames/classNames";
import { MutableRefObject, memo, useEffect, useRef, useState } from "react";
import { Input } from "@/shared/ui/form/input";
import { FilledButton, FilledButtonSize } from "@/shared/ui/filled-button";
import SearchIcon from "@/shared/assets/icons/search.svg";
import { TextInputProps } from "@mantine/core";

type PickedMantineTextInputProps = Pick<
  TextInputProps,
  "placeholder" | "value" | "defaultValue" | "onChange" | "style"
>;

interface SearchInputProps extends PickedMantineTextInputProps {
  className?: string;
  onSearch: () => void;
}

const BTN_HORIZONTAL_PADDINGS = 24;

export const SearchInput = memo((props: SearchInputProps) => {
  const { className, onSearch, ...otherProps } = props;

  const searchBtn = useRef() as MutableRefObject<HTMLButtonElement>;
  const [searchBtnWidth, setSearchBtnWidth] = useState<number>();

  useEffect(() => {
    const searchBtnWidth = searchBtn.current.getBoundingClientRect().width;
    setSearchBtnWidth(searchBtnWidth);
  }, [searchBtn.current]);

  const rightSectionWidth = searchBtnWidth
    ? `${searchBtnWidth + BTN_HORIZONTAL_PADDINGS}px`
    : "auto";

  const searchButton = (
    <FilledButton size={FilledButtonSize.S} ref={searchBtn} onClick={onSearch}>
      Search
    </FilledButton>
  );

  return (
    <Input
      className={classNames("", {}, [className])}
      leftSection={<SearchIcon />}
      size="sm"
      rightSection={searchButton}
      rightSectionWidth={rightSectionWidth}
      {...otherProps}
    ></Input>
  );
});
