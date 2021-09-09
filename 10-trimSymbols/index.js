/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number | undefined} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let count = 0;
  const CLEARED = [];

  for (const char of string) {
    if (CLEARED[CLEARED.length - 1] === char) {
      if (count < size) {
        CLEARED.push(char);
        count += 1;
      }
    } else {
      count = 1;
      CLEARED.push(char);
    }
  }

  if (size === 0){
    return '';
  }
  if (size === undefined){
    return string;
  }

  return CLEARED.join('');
}
