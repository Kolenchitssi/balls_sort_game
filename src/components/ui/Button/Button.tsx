import React, { FC } from "react";
import styles from "./Button.module.scss";

type Props = {
  className?: string;
  children?: React.ReactNode;
  [x: string]: unknown;
};

const Button: FC<Props> = ({ children, className = "", ...restProps }) => {
  return (
    <button className={`${styles[className]}  ${styles.btn}`} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
