import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { TUBES } from "../../constants/gameConstansts";
import { IMovingBall } from "../../models/IMovingBall";
import { RootState } from "../store";

interface IState {
  difficultGame: number;
  levelGame: number;
  // tubesMap: number[][];
  // history: Array<number[][]>; //массив  tubesMap по состоянию на каждый ход 0-начало и до  последнего
}

const initialState: IState = {
  // tubesMap: TUBES,
  difficultGame: 4,
  levelGame: 0,
};

export const gameSlice = createSlice({
  name: "gameBallsSort",
  initialState,
  reducers: {
    setDifficultGame: (state, action: PayloadAction<number>) => {
      state.difficultGame = action.payload;
    },
    setLevelGame: (state, action: PayloadAction<number>) => {
      state.levelGame = action.payload;
    },
    nextLevelGame: (state) => {
      state.levelGame += 1;
      console.log(state);
    },
  },
});

export const { setDifficultGame, setLevelGame, nextLevelGame } =
  gameSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
//* Селекторы также могут быть определены в строке, где они используются Например: `useSelector ((state) => state.game.difficultGame)`

export const selectDifficultGame = (state: RootState) =>
  state.game.difficultGame;
export const selectLevelGame = (state: RootState) => state.game.levelGame;

export default gameSlice.reducer;
