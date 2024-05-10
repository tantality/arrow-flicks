export const getDataChunk = <T>(
  data: Array<T>,
  itemsCount: number,
  portion: number
): Array<T> => {
  const startInd = -itemsCount + portion * itemsCount;
  const endInd = startInd + itemsCount;
  const chunk = data.filter((item, ind) => ind >= startInd && ind < endInd);

  return chunk;
};
