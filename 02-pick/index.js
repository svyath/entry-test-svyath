/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const PICKED_DATA = {};

  for(let [key, value] of Object.entries(obj)){
    if (fields.includes(key)) {
      PICKED_DATA[key] = value;
    }
  }
  return PICKED_DATA;
};
