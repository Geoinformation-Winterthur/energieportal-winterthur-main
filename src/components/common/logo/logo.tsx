'use client'
import styles from "./logo.module.scss";
import LogoFull from "./assets/logo-full.svg";
import LogoReduced from "./assets/logo-reduced.svg";

interface LogoProps {
  type: "full" | "reduced";
  width: number;
  color?: "red" | "grey";
}

export const Logo = ({ type, width, color = "red" }: LogoProps) => {

  return (
    <div className={`${styles["logo"]} ${styles[`logo--${color}`]}`}>
      {type === "full" ? <LogoFull width={width} height="100%" /> : <LogoReduced />}
    </div>
  )
}
