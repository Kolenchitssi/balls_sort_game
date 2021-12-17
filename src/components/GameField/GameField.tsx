import React, { FC, useState, useEffect } from "react";
import Tube from "../Tube/Tube2";
import css from "./GameField.module.scss";
// import { TUBES } from "../../constants/gameConstansts";
import { isCompleted } from "../../utils/isComleted";
import Button from "../../UI/Button/Button";
import TUBES_3 from "../../constants/easyLevel_3tubes";
import TUBES_4 from "../../constants/normLevel_4tubes";
import TUBES_5 from "../../constants/difficultLevel_5tubes";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  nextLevelGame,
  selectDifficultGame,
  selectLevelGame,
} from "../../store/reducers/gameSlice";

//принять сложность и в зависимости от нее  присвоить tubes=TUBES_3 4 5
const GameField: FC = ({}) => {
  const dispatch = useAppDispatch();
  const difficult = useAppSelector(selectDifficultGame);
  const level = useAppSelector(selectLevelGame);

  let tubesArr: number[][][] = [[[]]];
  const [tubes, setTubes] = useState(tubesArr[level]);

  switch (difficult) {
    case 3:
      tubesArr = TUBES_3;

      break;
    case 4:
      tubesArr = TUBES_4;

      break;
    case 5:
      tubesArr = TUBES_5;

      break;
    default:
      tubesArr = TUBES_3;
      break;
  }
  const [win, setWin] = useState(false);

  useEffect(() => {
    setTubes(tubesArr[level]);
    setWin(false);
  }, [difficult, level]);

  return (
    <div className={css.gameField + " main"}>
      <div className={css.lvl}>
        difficult : {difficult} level: {level + 1}{" "}
      </div>
      {win ? (
        <div className={css.winner}>
          {" "}
          <h2>Congratulations you win !!!</h2>{" "}
          <Button
            text="Next lvl &#8594;"
            classBtn=""
            handler={() => {
              dispatch(nextLevelGame());
            }}
          />
        </div>
      ) : null}
      {tubes.map((item, index) => {
        const completed = isCompleted(item);
        return (
          <Tube
            numberTube={index}
            balls={item}
            complete={completed}
            key={index}
            tubesArr={tubes}
            setTubes={setTubes}
            setWin={setWin}
          />
        );
      })}
    </div>
  );
};

export default GameField;
