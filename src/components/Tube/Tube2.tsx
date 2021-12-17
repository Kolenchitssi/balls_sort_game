import React, { FC } from "react";
import { getEventAttribute } from "../../utils/getEventAttribute";
import { isPossible } from "../../utils/isPossible";
import { isWin } from "../../utils/isWin";
import Ball from "../Ball/Ball";
import css from "./Tube.module.scss";

interface ITube {
  numberTube: number;
  balls: number[];
  complete: boolean;
  tubesArr: number[][];
  setTubes: Function;
  setWin: Function;
}

let numberTubeStart: number;
let numberTubeFinish: number;
let colorBallStart: number;
// let indexBallStart: number;

const Tube: FC<ITube> = ({
  numberTube,
  balls,
  complete,
  tubesArr,
  setTubes,
  setWin,
}) => {
  const newArrTubes = tubesArr.map((item) => {
    return [...item];
  });

  //? 2й способ let newTubes = JSON.parse(JSON.stringify(tubes))

  //* ========ball handlers=================

  const onDragStartHandler = (event: React.DragEvent<HTMLDivElement>) => {
    numberTubeStart = +getEventAttribute(event, "data-number_tube");
    colorBallStart = +getEventAttribute(event, "data-color-ball");
    event.currentTarget.style.opacity = "0.1%";
    // console.dir(event.target);
    // console.dir(event.currentTarget);
    // console.log("numberTubeStart", numberTubeStart);
    // indexBallStart = +getEventAttribute(event, "data-index_ball");
  };

  // const onDragLeaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
  //   console.log("onDragLeave", event.target);
  // };

  // const onDragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
  //   event.preventDefault();
  //   console.log("onDragOver", event.target);
  // };

  const onDragEndHandler = (event: React.DragEvent<HTMLDivElement>) => {
    // console.log("onDragEndHandler", event.target);
    event.currentTarget.style.opacity = "100%";
  };

  // const onDragExitHandler = (event: React.DragEvent<HTMLDivElement>) => {
  //   console.log("onDragExit", event.target);
  // };
  // const onDragEnterHandler = (event: React.DragEvent<HTMLDivElement>) => {
  //   console.log("onDragEnter", event.target);
  // };
  // const onDropHandler = (event: React.DragEvent<HTMLDivElement>) => {
  //   console.log("onDropHandler ball", event.target);
  // };

  //* ======tube handlers ==============================
  const onDragOverTube = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    numberTubeFinish = +getEventAttribute(event, "data-number_tube");
  };

  // проверить можно ли ложить шар если да то
  // todo сохранить предыдущее состояние в историю ходов
  // изменить матрицу
  // проверить стали ли все шары в пробирке одинаковые если да то  пометить
  // проверить  во всех пробирках ли помечено об успехе если да то игра выиграна

  const onDropHandlerTube = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    // console.log("onDropTube", event.target);
    // checking if it is possible to move the ball into the indicated tube
    if (isPossible(newArrTubes, numberTubeFinish, colorBallStart)) {
      // console.log("можно", newArrTubes[numberTubeFinish].length);
      newArrTubes[Number(numberTubeFinish)].push(colorBallStart);
      newArrTubes[numberTubeStart].pop();
    } else {
      //todo сделать звук и какуюто подсветку красным что-ли
      //? как поменять стиль на лету элемента или пробирки
      //alert("нельзя");
    }
    setTubes(newArrTubes);
    setWin(isWin(newArrTubes));

    // console.log(tubesArr, newArrTubes);
  };

  return (
    <div
      className={css.tube}
      data-number_tube={numberTube}
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
                  // onDragLeaveHandler={onDragLeaveHandler}
                  // onDragOverHandler={onDragOverHandler}
                  onDragEndHandler={onDragEndHandler}
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
