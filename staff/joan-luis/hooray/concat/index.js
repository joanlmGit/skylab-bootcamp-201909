function Hooray() {
   for (var i = 0; i  < arguments.length; i++)
       this[i] = arguments[i];

  this.length = arguments.length;	
}


/**
* 
* @param {*} array The array to concatenate elements to newArray
* 
* 
* @returns {*} newArray contains: array + arguments.
* 
*/
Hooray.prototype.concat = function() { 	
  var concatHooray = new Hooray();	
  
   for (var y = 0; y < this.length; y++){
       concatHooray[y] = this[y];
   }
     
   for (var i = 0; i < arguments.length; i++) {
     if (arguments[i] instanceof Array) {
        for (var j = 0; j < arguments[i].length; j++){
           concatHooray[y] = arguments[i][j];
           ++y
        }
     } else {
        concatHooray[y] = arguments[i];
        ++y			
     }
  }      
  concatHooray.length = y;
   return concatHooray;
   
};