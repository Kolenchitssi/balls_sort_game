import React, { FC } from "react";
import styles from "./Button.module.scss";

type Props = {
  className?: string;
  children?: React.ReactNode;
  [x: string]: unknown;
};

const Button: FC<Props> = ({ children, className = "", ...restProps }) => {
  console.log("render button", className);

  return (
    <button className={`${styles[className]}  ${styles.btn}`} {...restProps}>
      {children}
    </button>
  );
};

const MemoizeButton = React.memo(Button);
export default MemoizeButton;
