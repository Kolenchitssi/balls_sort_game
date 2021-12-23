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
  console.log("render myLink to", to);

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

const MemoizeMyLink = React.memo(MyLink);
export default MemoizeMyLink;
