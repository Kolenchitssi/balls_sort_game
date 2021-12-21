import React, { FC } from "react";
import styles from "./Select.module.scss";

type Props = {
  className?: string;
  [x: string]: unknown;
};

const Select: FC<Props> = ({ ...props }) => {
  return (
    <select
      name="difficulty"
      className={styles.select}
      {...props}
      defaultValue={4}
    >
      <option value={3}>easy </option>
      <option value={4}>normal</option>
      <option value={5}>difficult</option>
    </select>
  );
};

export default Select;
