import React, { FC } from "react";
import css from "./Ball.module.scss";

interface IBall {
  numberTube: number;
  indexBall: number;
  colorBall: number;
  draggable: boolean;
  onDragStartHandler?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragLeaveHandler?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragEndHandler?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragExitHandler?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragEnterHandler?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragOverHandler?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDropHandler?: (event: React.DragEvent<HTMLDivElement>) => void;
}

const Ball: FC<IBall> = ({
  numberTube,
  indexBall,
  colorBall,
  draggable,
  onDragStartHandler,
  onDragLeaveHandler,
  onDragEndHandler,
  onDragExitHandler,
  onDragEnterHandler,
  onDragOverHandler,
  onDropHandler,
}) => {
  const color1 = "ball" + colorBall;
  const styleBall = css.ball + " " + css[color1];

  return (
    <div
      data-number_tube={numberTube}
      data-index_ball={indexBall}
      data-color-ball={colorBall}
      className={styleBall}
      draggable={draggable}
      onDragStart={onDragStartHandler}
      onDragLeave={onDragLeaveHandler}
      onDragEnd={onDragEndHandler}
      onDragOver={onDragOverHandler}
      onDragExit={onDragExitHandler}
      onDragEnter={onDragEnterHandler}
      onDrop={onDropHandler}
    ></div>
  );
};

export default Ball;
