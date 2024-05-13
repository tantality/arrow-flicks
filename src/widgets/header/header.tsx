import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./header.module.scss";
import { memo, useState } from "react";
import { Logo } from "@/shared/ui/logo";
import { Group } from "@mantine/core";
import { SidebarDrawer } from "../sidebar/ui/sidebar-drawer/sidebar-drawer";
import MenuIcon from "@/shared/assets/icons/menu.svg";

interface HeaderProps {
  className?: string;
}

export const Header = memo((props: HeaderProps) => {
  const { className, ...otherProps } = props;

  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  const handleMenuButtonClick = () => {
    setIsDrawerOpened(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpened(false);
  };

  return (
    <header className={classNames(cls.header, {}, [className])} {...otherProps}>
      <Group gap={"1.5rem"}>
        <MenuIcon className={cls.menu} onClick={handleMenuButtonClick} />
        <Logo />
        <SidebarDrawer isOpened={isDrawerOpened} onClose={handleDrawerClose} />
      </Group>
    </header>
  );
});
