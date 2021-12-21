import React, { FC } from "react";
import {
  decrementNumberOfMoves,
  selectNumberOfMoves,
} from "../../store/reducers/gameSlice";

import { getEventAttribute } from "../../utils/getEventAttribute";
import { isPossible } from "../../utils/isPossible";
import { isWin } from "../../utils/isWin";
import Ball from "../Ball/Ball";
import css from "./Tube.module.scss";
import useSound from "use-sound";

import soundEndMoving from "../../assets/audio/bigGurgle.mp3";
import soundErrorMoving from "../../assets/audio/error2.mp3";
import soundSuccess from "../../assets/audio/winTadam.mp3";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { isAnyMoves } from "../../utils/isAnyMoves";
import { routePath } from "../../router/routePath";
import { useNavigate } from "react-router-dom";

type Props = {
  numberTube: number;
  balls: number[];
  complete: boolean;
  tubesArr: number[][];
  setTubes: Function;
  setWin: Function;
};

let numberTubeStart: number;
let numberTubeFinish: number;
let colorBallStart: number;

const onDragStartHandler = (event: React.DragEvent<HTMLDivElement>) => {
  numberTubeStart = Number(getEventAttribute(event, "data-number-tube"));
  colorBallStart = Number(getEventAttribute(event, "data-color-ball"));
  event.currentTarget.style.opacity = "0.1%";
};

const Tube: FC<Props> = ({
  numberTube,
  balls,
  complete,
  tubesArr,
  setTubes,
  setWin,
}) => {
  const [playEndMoving] = useSound(soundEndMoving);
  const [playErrorMoving] = useSound(soundErrorMoving);
  const [playSuccess] = useSound(soundSuccess);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const numberOfMoves = useAppSelector(selectNumberOfMoves);

  const newArrTubes = tubesArr.map((item) => {
    return [...item];
  });

  const onDragEndHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.currentTarget.style.opacity = "100%";
  };

  // ======tube handlers ==============================
  const onDragOverTube = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    numberTubeFinish = Number(getEventAttribute(event, "data-number-tube"));
  };

  const onDropHandlerTube = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    // checking if it is possible to move the ball into the indicated tube
    if (isPossible(newArrTubes, numberTubeFinish, colorBallStart)) {
      newArrTubes[Number(numberTubeFinish)].push(colorBallStart);
      newArrTubes[numberTubeStart].pop();
      playEndMoving();
      dispatch(decrementNumberOfMoves());
      setTubes(newArrTubes);

      if (!isAnyMoves(numberOfMoves)) {
        navigate(routePath.GAMEOVER);
      }
    } else {
      playErrorMoving();
    }

    setWin(isWin(newArrTubes));
    if (isWin(newArrTubes)) {
      playSuccess();
    }
  };

  return (
    <div
      className={css.tube}
      data-number-tube={numberTube}
      data-complete={complete}
      onDragOver={onDragOverTube}
      onDrop={onDropHandlerTube}
    >
      {balls.length > 0
        ? balls.map((item, index, array) => {
            if (index === array.length - 1) {
              return (
                <Ball
                  numberTube={numberTube}
                  indexBall={index}
                  colorBall={item}
                  draggable={true}
                  onDragStartHandler={onDragStartHandler}
                  onDragEndHandler={onDragEndHandler}
                  key={numberTube + "_" + index}
                />
              );
            } else
              return (
                <Ball
                  numberTube={numberTube}
                  indexBall={index}
                  colorBall={item}
                  draggable={false}
                  key={numberTube + "_" + index}
                />
              );
          })
        : null}
    </div>
  );
};

export default Tube;
