import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NUMBER_OF_MOVES } from "../../constants/gameConstansts";
import { RootState } from "../store";
import { createSelector } from "reselect";

type InitState = {
  difficultGame: number;
  levelGame: number;
  numberOfMoves: number;
  // tubesMap: number[][];
  history: Array<number[][]>; //массив  tubesMap по состоянию на каждый ход 0-начало и до  последнего
};

const initialState: InitState = {
  // tubesMap: TUBES,
  difficultGame: 4,
  levelGame: 1,
  numberOfMoves: NUMBER_OF_MOVES,
  history: [[]],
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
    },
    resetNumberOfMoves: (state) => {
      state.numberOfMoves = NUMBER_OF_MOVES;
    },
    decrementNumberOfMoves: (state) => {
      state.numberOfMoves -= 1;
    },
    incrementNumberOfMoves: (state) => {
      if (state.numberOfMoves < 50) {
        state.numberOfMoves += 1;
      }
    },
    addMoveToHistory: (state, action: PayloadAction<number[][]>) => {
      // console.log("addMoveToHistory", state.history);
      // state.history = [...state.history, action.payload];
      state.history.push(action.payload);
    },
    undoLastMoveFromHistory: (state) => {
      if (state.history.length > 1) {
        // console.log("undo:<=", state.history);
        state.history.pop();
      }
    },
    resetHistory: (state) => {
      // console.log("reset history");
      state.history = [];
    },
  },
});

export const {
  setDifficultGame,
  setLevelGame,
  nextLevelGame,
  resetNumberOfMoves,
  decrementNumberOfMoves,
  incrementNumberOfMoves,
  addMoveToHistory,
  undoLastMoveFromHistory,
  resetHistory,
} = gameSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
//* Селекторы также могут быть определены в строке, где они используются Например: `useSelector ((state) => state.game.difficultGame)`

export const selectDifficultGame = (state: RootState) => {
  console.log("start selectDifficultGame");
  return state.game.difficultGame;
};

export const reSelectDifficultGame = createSelector(
  selectDifficultGame,
  (difficult) => {
    return difficult;
  }
);

export const selectLevelGame = (state: RootState) => {
  console.log("start selectLevelGame");
  return state.game.levelGame;
};

export const reSelectLevelGame = createSelector(
  selectLevelGame,
  (level) => level
);

export const selectNumberOfMoves = (state: RootState) =>
  state.game.numberOfMoves;

export const selectPrevMoves = (state: RootState) => {
  if (state.game.history.length > 1) {
    return state.game.history[state.game.history.length - 1];
  }
  return state.game.history[0];
};

export const selectHistoryMoves = (state: RootState) => state.game.history;

export default gameSlice.reducer;
