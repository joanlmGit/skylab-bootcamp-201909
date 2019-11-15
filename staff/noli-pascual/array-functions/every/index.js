/**
* EVERY should check if ALL the elements of the array accomplish a condition.
*
* @param {Array} array The array tp check.
* @param {function} function The function that provides the condition to accomplish.
* @returns {boolean} True if ALL the elements accomplish the condition, else, false.
* @throws {Error} error if non array.
* @throws {Error} error if no function.
*/

function every(array, expression) {

    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    for (let i = 0; i < array.length; i++) {
        if (!expression(array[i])) return false;
    }
    return true;
}