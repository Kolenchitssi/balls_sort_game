// этот файл не рабочий потом  посмотрю подключен Tube2

import React, { FC, useState } from "react";
import { getEventAttribute } from "../../utils/getEventAttribute";
import Ball from "../Ball/Ball";
import css from "./Tube.module.scss";

type Props = {
  numberTube: number;
  balls: number[];
  complete: boolean;
  tubesArr: number[][];
  setTubes: Function;
};

const Tube: FC<Props> = ({
  numberTube,
  balls,
  complete,
  tubesArr,
  setTubes,
}) => {
  const [numFinishTube, setNumFinishTube] = useState("");
  const [movingBall, setMovingBall] = useState({
    numberTube: 0,
    indexBall: 0,
    colorBall: 0,
  });

  const newArrTubes = tubesArr.map((item) => {
    return [...item];
  });
  // 2 способ let newTubes = JSON.parse(JSON.stringify(tubes))

  // ======= ball handlers =============
  const onDragStartHandler = (event: React.DragEvent<HTMLDivElement>) => {
    // console.log(event);

    const numberTubeStart = getEventAttribute(event, "data-number_tube");
    const indexBallStart = getEventAttribute(event, "data-index_ball");
    const colorBallStart = getEventAttribute(event, "data-color-ball");

    setMovingBall({
      numberTube: Number(numberTubeStart),
      indexBall: Number(indexBallStart),
      colorBall: Number(colorBallStart),
    });

    // console.log(
    //   "onDragStart",
    //   "numberTubeStart=",
    //   numberTubeStart,
    //   "indexBallStart=",
    //   indexBallStart,
    //   "colorBallStart=",
    //   colorBallStart,
    //   "movingBall==",
    //   movingBall
    // );
  };
  const onDragLeaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
    // console.log("onDragLeave", event.target);
  };
  const onDragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    // console.log("onDragOver", event.target);
  };

  const onDragEndHandler = (event: React.DragEvent<HTMLDivElement>) => {
    // проверить можно ли ложит шар если да то
    // сохранить предыдущее состояние в историю ходов
    // изменить матрицу

    // проверить стали ли все шары в пробирке одинаковые если да то  пометить зеленым
    // проверить  во всех пробирках ли помечено об успехе если да то игра выиграна
    // console.log("movingBall==", movingBall, "numFinishTube=", numFinishTube);
    const newTubes = tubesArr.map((item) => {
      return [...item];
    });
    newTubes[Number(numFinishTube) + 1].push(movingBall.colorBall); //!неправильная позиция  получает откуда забираю +1  чтобы видеть что работает
    newTubes[movingBall.numberTube].pop();
    setTubes(newTubes);
    // console.log("onDragEnd", event.target);
    // console.log(tubesArr, newTubes);
  };

  const onDragExitHandler = (event: React.DragEvent<HTMLDivElement>) => {
    // console.log("onDragExit", event.target);
  };
  const onDragEnterHandler = (event: React.DragEvent<HTMLDivElement>) => {
    // console.log("onDragEnter", event.target);
  };

  // ======tube handlers ==============================
  const onDropHandlerTube = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    // console.log("onDrop", event.target);

    newArrTubes[Number(numFinishTube)].push(movingBall.colorBall);
    newArrTubes[movingBall.numberTube].pop();
    setTubes(newArrTubes);
    // console.log("onDropTube", event.target);
    // console.log(tubesArr, newArrTubes);
  };

  return (
    <div
      className={css.tube}
      data-number_tube={numberTube}
      data-complete={complete}
      onDragOver={(event) => {
        event.preventDefault();

        // console.log("event Tube onDragOver");
        const numberFinishPlace = getEventAttribute(event, "data-number-tube");
        // console.log("numberFinishPlace", numberFinishPlace);

        if (numberFinishPlace) {
          // console.log("numberFinishPlace2", +numberFinishPlace);
          setNumFinishTube(numberFinishPlace);
        }
        // console.log("numberTube", numberTube, "numFinishTube", numFinishTube);
      }}
      onDrop={onDropHandlerTube}
    >
      <p>numFin-{numFinishTube}</p>
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
                  // onDragLeaveHandler={onDragLeaveHandler}
                  // onDragOverHandler={onDragOverHandler}
                  // onDragEndHandler={onDragEndHandler}
                  // onDragExitHandler={onDragExitHandler}
                  // onDragEnterHandler={onDragEnterHandler}
                  // onDropHandler={onDropHandler}
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
