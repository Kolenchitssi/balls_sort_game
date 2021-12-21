import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MyLink.module.scss";

type Props = {
  to: string;
  className?: string;
  children?: React.ReactNode;
  [x: string]: unknown;
};

const MyLink: FC<Props> = ({ children, to, className = "", ...restProps }) => {
  return (
    <NavLink
      to={to}
      className={`${styles[className]}  ${styles.lnk}`}
      {...restProps}
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
