Hooray.prototype.reduce = function (expression) {
    
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    if (this.length === 0) throw TypeError("Reduce of empty hooray with no initial value");
    
    var result=0;
    for (i=0; i<this.length; i++) {
        result=expression(result,this[i]);
    }
    
    return result;
}