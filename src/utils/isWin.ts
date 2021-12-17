import { isCompleted } from "./isComleted";

export const isWin = (item: number[][]) => {
  return item.every((tube) => tube.length === 0 || isCompleted(tube));
};
