'use client'
import clsx from 'clsx';
import LogoFull from "./assets/logo-full.svg";
import LogoReduced from "./assets/logo-reduced.svg";
import styles from "./logo.module.scss";

interface LogoProps {
  type: "full" | "reduced";
  width: number;
  color?: "red" | "grey";
}

export const Logo = ({ type, width, color = "red" }: LogoProps) => {

  return (
    <div className={clsx(styles["logo"], styles[`logo--${color}`])}>
      {type === "full" ? <LogoFull width={width} height="100%" /> : <LogoReduced />}
    </div>
  )
}
