import React, { FC } from "react";
import css from "./Header.module.scss";

const Header: FC = () => {
  return <div className={css.header + " header"}>Balls Sort</div>;
};

export default Header;
