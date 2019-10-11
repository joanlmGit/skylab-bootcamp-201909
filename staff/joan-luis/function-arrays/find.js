
var arrayElements=["Elena","Pedro","Lopez","Ricardo","2",6,45];
var isFound=false;
/**
 * 
 * @param {Array} paramArray array que contiene los a buscar
 * @param {String} elementfind elemento que queremos buscar
 */
function find(paramArray,elementfind){
   debugger
   if (!(paramArray instanceof Array)) throw TypeError (paramArray + ' is not array');
   if ((typeof elementfind==='undefined' )) throw TypeError (elementfind + ' the element is undefined');
   
   for(var i=0; i<paramArray.length;i++){
      if (paramArray[i]==elementfind) {
         isFound=true;
         break;
      }
   }
   return isFound;
}



