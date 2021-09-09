export const sameParityFilter = (arr = []) => {
  const FILTERED = arr.filter(value => value % 2 === arr[0] % 2);

  return FILTERED;
}
