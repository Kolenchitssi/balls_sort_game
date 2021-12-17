export const getRandomNumber = (min = 0, max = 101) => {
  return Math.floor(Math.random() * (max - min)) + min; // [min max)
};
