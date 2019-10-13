function Hooray() {
   for (var i = 0; i  < arguments.length; i++)
       this[i] = arguments[i];

   this.length = arguments.length;
}

/**
 * 
 *
 * @param {String} elementfind elemento que queremos buscar
 */


 Hooray.prototype.find=function(elementfind){
   
    
    if ((typeof elementfind==='undefined' )) throw TypeError (elementfind + ' the element is undefined');
    
    var isFound=false;
 
    for(var i=0; i<this.length;i++){
       if (this[i]===elementfind) {
          isFound=true;
          break;
       }
    }
    return isFound;
 }


