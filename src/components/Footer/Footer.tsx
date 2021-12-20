import React, { FC } from "react";
import styles from "./Footer.module.scss";

type Props = {
  className: String;
};

const Footer: FC<Props> = ({ className }) => {
  return <div className={`${styles.footer} ${className}`}>2021</div>;
};

export default Footer;
