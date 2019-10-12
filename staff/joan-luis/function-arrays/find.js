


/**
 * 
 * @param {Array} paramArray array que contiene los a buscar
 * @param {String} elementfind elemento que queremos buscar
 */
function find(paramArray,elementfind){
   debugger
   if (!(paramArray instanceof Array)) throw TypeError (paramArray + ' is not array');
   if ((typeof elementfind==='undefined' )) throw TypeError (elementfind + ' the element is undefined');
   
   var isFound=false;

   for(var i=0; i<paramArray.length;i++){
      if (paramArray[i]==elementfind) {
         isFound=true;
         break;
      }
   }
   return isFound;
}



