import { classNames } from "../../lib/classNames/classNames";
import cls from "./logo.module.scss";
import { memo } from "react";
import LogoIcon from "../../assets/icons/logo.svg";
import { Poppins } from "next/font/google";

interface LogoProps {
  className?: string;
}

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export const Logo = memo((props: LogoProps) => {
  const { className, ...otherProps } = props;

  return (
    <div className={classNames(cls.logo, {}, [className])} {...otherProps}>
      <div className={cls.container}>
        <LogoIcon />
        <div className={classNames(cls.text, {}, [poppins.className])}>
          ArrowFlicks
        </div>
      </div>
    </div>
  );
});
