export const isCompleted = (item: number[]) => {
  if (item.length === 5) {
    return item.every((item, index, arr) => item === arr[0]);
  }
  return false;
};
