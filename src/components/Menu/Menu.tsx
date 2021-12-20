import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button/Button";
import MyLink from "../ui/MyLink/MyLink";
import Select from "../ui/Select/Select";
import styles from "./Menu.module.scss";
import { routePath } from "../../router/routePath";
import { useAppDispatch } from "../../store/hooks";
import { setDifficultGame, setLevelGame } from "../../store/reducers/gameSlice";
import useSound from "use-sound";
import soundStart from "../../assets/audio/startGame.mp3";
import soundDing from "../../assets/audio/bleep.mp3";

type Props = {
  className: String;
};

const Menu: FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  // let navigate = useNavigate();

  const [playStartSound] = useSound(soundStart);
  const [playDingSound] = useSound(soundDing);

  const clickHandlerStart = () => {
    playStartSound();
    dispatch(setLevelGame(0));
    // navigate(routePath.START);
  };

  // const clickHandlerRules = () => {
  //   navigate(routePath.HOME);
  // };

  const clickHandlerUndo = () => {
    console.log("press Undo");
  };

  const clickHandlerSelect = (value: string) => {
    playDingSound();
    dispatch(setDifficultGame(Number(value)));
  };
  return (
    <div className={`${styles.menu} ${className}`}>
      <h2 className={styles.menuTitle}>Menu</h2>
      <MyLink
        to={routePath.START}
        onClick={clickHandlerStart}
        className="Primary"
      >
        New Game
      </MyLink>
      <MyLink
        to={routePath.HOME}
        // onClick={clickHandlerRules}
        className="Primary"
      >
        Rules
      </MyLink>
      <Button onClick={clickHandlerUndo} className="Primary">
        &#8678; Undo
      </Button>
      <p>{0}:moves left </p>
      <p className={styles.selectTxt}> Select difficulty:</p>
      <Select
        onChange={(event: React.FormEvent<HTMLSelectElement>) =>
          clickHandlerSelect(event.currentTarget.value)
        }
      />
    </div>
  );
};

export default Menu;
