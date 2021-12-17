import React, { FC } from "react";
import css from "./Buttom.module.scss";

interface IButton {
  text: string;
  handler: Function;
  classBtn?: string;
}
const Button: FC<IButton> = ({ text, handler, classBtn = "" }) => {
  return (
    <button
      className={css[classBtn] + " " + css.btn}
      onClick={() => {
        handler();
      }}
    >
      {text}
    </button>
  );
};

export default Button;
