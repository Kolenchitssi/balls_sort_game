import React, { FC } from "react";
import styles from "./Header.module.scss";

type Props = {
  className: String;
};

const Header: FC<Props> = ({ className }) => {
  return <div className={`${styles.header} ${className}`}>Balls Sort</div>;
};

export default Header;
