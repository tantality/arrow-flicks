export const calculatePageCount = (
  totalItemCount: number,
  itemsPerPage: number
): number => {
  if (totalItemCount <= itemsPerPage) {
    return 1;
  }

  const pageAmount = Math.ceil(totalItemCount / itemsPerPage);

  return pageAmount;
};
