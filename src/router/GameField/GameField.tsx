import React, { FC, useState, useEffect } from "react";
import Tube from "../../components/Tube/Tube2";
import styles from "./GameField.module.scss";

import { isCompleted } from "../../utils/isComleted";
import Button from "../../components/ui/Button/Button";
import TUBES_3 from "../../constants/easyLevel_3tubes";
import TUBES_4 from "../../constants/normLevel_4tubes";
import TUBES_5 from "../../constants/difficultLevel_5tubes";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addMoveToHistory,
  nextLevelGame,
  resetHistory,
  resetNumberOfMoves,
  reSelectDifficultGame,
  reSelectLevelGame,
  selectPrevMoves,
} from "../../store/reducers/gameSlice";

import useSound from "use-sound";
import soundDing from "../../assets/audio/bleep.mp3";

type Props = {
  className: String;
};

const GameField: FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const difficult = useAppSelector(reSelectDifficultGame);
  const level = useAppSelector(reSelectLevelGame);

  const [playDingSound] = useSound(soundDing);

  let tubesArr: { [key: string]: number[][] } = {};

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

  let tubes = useAppSelector(selectPrevMoves);

  console.log("currentTubesArr", tubes);

  const setTubes = (newArrTube: number[][]) => {
    dispatch(addMoveToHistory(newArrTube));
  };

  useEffect(() => {
    console.log("start useEffect");

    dispatch(resetHistory());
    setTubes(tubesArr[`level-${level}`]);
    setWin(false);
  }, [difficult, level]);

  const [win, setWin] = useState(false);

  return (
    <div className={`${styles.gameField}  ${className}`}>
      <div className={styles.lvl}>
        difficult : {difficult} level: {level}
      </div>
      {win ? (
        <div className={styles.winner}>
          <h2>Congratulations you win !!!</h2>
          <Button
            onClick={() => {
              playDingSound();
              dispatch(nextLevelGame());
              dispatch(resetNumberOfMoves());
            }}
          >
            Next lvl &#8594;
          </Button>
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
