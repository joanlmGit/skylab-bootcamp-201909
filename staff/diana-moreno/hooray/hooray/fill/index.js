/**
 * Modifies all the elements of an array from a start index (default zero) to an end index (default array length) with a static value.
 * @param  {Array} array    Array to be modified
 * @param  {String, Number} item     Item to modify the array with
 * @param  {Number} indexIni Index to start to modify
 * @param  {NUmber} indexEnd Index to end to modify
 * @return {Array}          The modified array
 * @throws {TypeError} If item is not a string or a number, and indexIni and indexEnd are not a number.
 */
Hooray.prototype.fill = function(item, indexIni, indexEnd) {
  if (!(typeof item === 'number' || typeof item === 'string')) throw TypeError(typeof item + ' is not a string or a number');
  if (indexIni !== undefined && typeof indexIni !== 'number') throw TypeError('index should be a number');
  if (indexEnd !== undefined && typeof indexEnd !== 'number') throw TypeError('index should be a number');

  if (!indexEnd) indexEnd = this.length - 1;
  else if (indexEnd) indexEnd = indexEnd - 1;

  if (!item) item = undefined;
  if (!indexIni) indexIni = 0;

  for (var i = indexIni; i <= indexEnd; i++) {
    this[i] = item;
  };
  return this;
};
