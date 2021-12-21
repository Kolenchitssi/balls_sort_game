import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NUMBER_OF_MOVES } from "../../constants/gameConstansts";
import { RootState } from "../store";

type InitState = {
  difficultGame: number;
  levelGame: number;
  numberOfMoves: number;
  history: Array<number[][]>;
};

const initialState: InitState = {
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
      state.history.push(action.payload);
    },
    undoLastMoveFromHistory: (state) => {
      if (state.history.length > 1) {
        state.history.pop();
      }
    },
    resetHistory: (state) => {
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

export const selectDifficultGame = (state: RootState) =>
  state.game.difficultGame;
export const selectLevelGame = (state: RootState) => state.game.levelGame;
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
