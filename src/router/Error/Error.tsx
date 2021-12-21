import React, { FC } from "react";

type Props = {
  className: String;
};

const Error: FC<Props> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <h1>Error 404</h1>
    </div>
  );
};

export default Error;
