/**
 * Create a prototype array and similars properties
 */

function Hooray() {
   for (var i = 0; i  < arguments.length; i++)
       this[i] = arguments[i];

   this.length = arguments.length;
}



Hooray.prototype.every = function (expression) {
	if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
	
    for (let i = 0; i < this.length; i++) {
        if (!expression(this[i])) return false;
    }
    return true;
};