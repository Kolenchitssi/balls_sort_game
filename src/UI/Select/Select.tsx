import React, { FC } from "react";
import css from "./Select.module.scss";

interface ISelect {
  handler: Function;
}

const Select: FC<ISelect> = ({ handler }) => {
  return (
    <select
      name="difficulty"
      className={css.select}
      onChange={(event) => handler(event.target.value)}
      defaultValue={4}
    >
      <option value={3}>easy </option>
      <option value={4}>normall</option>
      <option value={5}>difficult</option>
    </select>
  );
};

export default Select;
