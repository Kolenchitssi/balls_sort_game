import React, { FC, useState, useEffect } from "react";
import Tube from "../../components/Tube/Tube2";
import css from "./GameField.module.scss";

import { isCompleted } from "../../utils/isComleted";
import Button from "../../components/ui/Button/Button";
import TUBES_3 from "../../constants/easyLevel_3tubes";
import TUBES_4 from "../../constants/normLevel_4tubes";
import TUBES_5 from "../../constants/difficultLevel_5tubes";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  nextLevelGame,
  selectDifficultGame,
  selectLevelGame,
} from "../../store/reducers/gameSlice";

import useSound from "use-sound";
import soundDing from "../../assets/audio/bleep.mp3";

type Props = {
  className: String;
};

const GameField: FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const difficult = useAppSelector(selectDifficultGame);
  const level = useAppSelector(selectLevelGame);

  const [playDingSound] = useSound(soundDing);

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
    <div className={`${css.gameField}  ${className}`}>
      <div className={css.lvl}>
        difficult : {difficult} level: {level + 1}
      </div>
      {win ? (
        <div className={css.winner}>
          <h2>Congratulations you win !!!</h2>
          <Button
            onClick={() => {
              playDingSound();
              dispatch(nextLevelGame());
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
