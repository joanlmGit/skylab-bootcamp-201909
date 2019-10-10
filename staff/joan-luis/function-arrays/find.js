var elemen;
var arrayElements=["Elena","Pedro","Lopez","Ricardo","2",6,45];
var isFound=false;
/**
 * 
 * @param {array} paramArray array que contiene los a buscar
 * @param {*} elementfind elemento que queremos buscar
 */
function findElement(paramArray,elementfind){
   if (!(array instanceof Array)) throw TypeError (array + ' is not array');
   if ((typeof elementfind==='undefined' )) throw TypeError (elementfind + ' the element is undefined');
   for(var i=0; i<paramArray.length;i++){
      if (paramArray[i]==elementfind) {
         isFound=true;
         break;
      }
   }
   return isFound;
}

/**
 * 
 * @param {funcion} expresion realiza la busqueda del elemento en un array
 */
function find(expresion){
   if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
   return expresion(arrayElements,6);
}

console.log(find(findElement));