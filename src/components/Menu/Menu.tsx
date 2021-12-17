import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";
import Select from "../../UI/Select/Select";
import css from "./Menu.module.scss";
import { routePath } from "../../router/routePath";
import { useAppDispatch } from "../../store/hooks";
import { setDifficultGame, setLevelGame } from "../../store/reducers/gameSlice";
//! import ding from "../../assets/audio/start.ogg";

const Menu: FC = () => {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  //! const dingAudio = new Audio("../../assets/audio/start.ogg");
  //! dingAudio.src = "../../assets/audio/start.ogg";
  //! dingAudio.currentTime = 0;
  //! dingAudio.muted = false;

  const clickHandlerStart = () => {
    //! dingAudio.play();
    dispatch(setLevelGame(0));
    navigate(routePath.START);
  };

  const clickHandlerRules = () => {
    navigate(routePath.HOME);
  };

  const clickHandlerUndo = () => {
    console.log("press Undo");
  };

  const clickHandlerSelect = (value: Number) => {
    //! dingAudio.play();
    dispatch(setDifficultGame(Number(value)));
  };
  return (
    <div className={css.menu + " menu"}>
      <h2 className={css.menuTitle}>Menu</h2>
      <Button text="New Game" handler={clickHandlerStart} classBtn="Primary" />
      <Button text="Rules" handler={clickHandlerRules} classBtn="Primary" />
      <Button
        text="&#8678;         Undo"
        handler={clickHandlerUndo}
        classBtn="Primary"
      />
      <p>{0}:moves left </p>
      <p className={css.selectTxt}> Select difficulty:</p>
      <Select handler={clickHandlerSelect} />

      {/* <button
        onClick={() => {
          dingAudio.play();
        }}
      >
        SoundPlay
      </button> */}
    </div>
  );
};

export default Menu;
