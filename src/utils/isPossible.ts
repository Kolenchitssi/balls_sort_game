export const isPossible = (
  newArrTubes: number[][],
  numberTubeFinish: number,
  colorBallStart: number
) => {
  return (
    newArrTubes[numberTubeFinish].length === 0 ||
    (newArrTubes[numberTubeFinish].length < 5 &&
      newArrTubes[numberTubeFinish][
        newArrTubes[numberTubeFinish].length - 1
      ] === colorBallStart)
  );
};
