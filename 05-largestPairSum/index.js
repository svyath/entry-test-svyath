/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
  const THE_LARGEST =  numbers.sort((a, b) => b - a).slice(0, 2);
  const THE_LARGEST_SUM = THE_LARGEST.reduce((a, b) => a + b, 0);

  return THE_LARGEST_SUM;
}
