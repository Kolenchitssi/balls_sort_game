import React, { FC } from "react";
import styles from "./Ball.module.scss";
import soundStartMoving from "../../assets/audio/littleGurgle.mp3";
import useSound from "use-sound";

type Props = {
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
};

const Ball: FC<Props> = ({
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
  const color1 = `ball${colorBall}`;
  const styleBall = `${styles.ball} ${styles[color1]}`;
  const [playStartMoving] = useSound(soundStartMoving);

  return (
    <div
      data-number-tube={numberTube}
      data-index_ball={indexBall}
      data-color-ball={colorBall}
      className={styleBall}
      draggable={draggable}
      onDragStart={(event) => {
        playStartMoving();
        if (onDragStartHandler) {
          onDragStartHandler(event);
        }
      }}
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
