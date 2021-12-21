import React, { FC } from "react";

type Props = {
  className: String;
};

const GameOver: FC<Props> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <h1>Game Over!</h1>
    </div>
  );
};

export default GameOver;
