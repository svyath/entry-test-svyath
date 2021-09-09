// TODO: rename function, maybe array-of-arrays

export const chunk = (arr = [], size = 0) => {
  let CHUNKED = [], i = 0;

  while (i < arr.length) {
    CHUNKED.push(arr.slice(i, i += size));
  }

  return CHUNKED;
};
