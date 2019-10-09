var elemen;
var arrayElements=["Elena","Pedro","Lopez","Ricardo","2",6,45];
var isFound=false;
/**
 * 
 * @param {array} paramArray array que contiene los a buscar
 * @param {*} elementfind elemento que queremos buscar
 */
function findElement(paramArray,elementfind){
   debugger
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
   return expresion(arrayElements,6);
}

console.log(find(findElement));