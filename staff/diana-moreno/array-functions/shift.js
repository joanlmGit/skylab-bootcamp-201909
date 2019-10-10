/**
 * Removes the first element of the array and returns the element
 * @param  {[type]} array Array to remove the element from
 * @return {[type]}       The first element of the array
 * @throws {TypeError}    If array is not an array
 */
function shift(array) {
  if(!array) return undefined;
  if(!(array instanceof Array)) throw TypeError('Data type is not an array');

  for(var i = 0; i < array.length-1; i++)
    array[i] = array[i+1]

  array.length = array.length-1
  var firstElem = array[0]

  return firstElem
}
