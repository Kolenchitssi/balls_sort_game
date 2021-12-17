import React, { FC } from "react";
import css from "./Home.module.scss";

const Home: FC = () => {
  return (
    <div className={css.home + " main"}>
      <h2>Правила игры: </h2>

      <p>
        Cоберите в каждой пробирке шарики одного цвета, ложить шарики можно либо
        в пустую пробирку либо на шарик такого же цвета.{" "}
      </p>
      <p>
        {" "}
        Для начала игры нажмите кнопку{" "}
        <span className={css.accent}>New Game"</span>.
      </p>
      <h2>Rules of the game: </h2>

      <p>
        Collect balls of the same color in each test tube; you can put the balls
        either in an empty test tube or on a ball of the same color.{" "}
      </p>
      <p>
        {" "}
        Press the <span className={css.accent}>New Game</span> to start the
        game.{" "}
      </p>
    </div>
  );
};

export default Home;
