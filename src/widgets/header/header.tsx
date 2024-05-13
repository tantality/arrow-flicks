import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./header.module.scss";
import { memo, useState } from "react";
import { Logo } from "@/shared/ui/logo";
import { Group } from "@mantine/core";
import { SidebarDrawer } from "../sidebar/ui/sidebar-drawer/sidebar-drawer";
import MenuIcon from "@/shared/assets/icons/menu.svg";

type HederTheme = "transparent" | "light";

interface HeaderProps {
  className?: string;
  theme?: HederTheme;
  withMenu: boolean;
}

export const Header = memo((props: HeaderProps) => {
  const { className, withMenu = true, theme = "light", ...otherProps } = props;

  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  const handleMenuButtonClick = () => {
    setIsDrawerOpened(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpened(false);
  };

  return (
    <header
      className={classNames(cls.header, {}, [className, cls[theme]])}
      {...otherProps}
    >
      <Group gap={"1.5rem"}>
        {withMenu ? (
          <MenuIcon className={cls.menu} onClick={handleMenuButtonClick} />
        ) : null}
        <Logo />
        {withMenu ? (
          <SidebarDrawer
            isOpened={isDrawerOpened}
            onClose={handleDrawerClose}
          />
        ) : null}
      </Group>
    </header>
  );
});
