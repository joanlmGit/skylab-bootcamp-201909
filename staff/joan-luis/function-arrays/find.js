var elemen;
var arrayElements=["Elena","Pedro","Lopez","Ricardo","2",6,45];
var isFound=false;
/**
 * 
 * @param {*} paramArray 
 * @param {*} elementfind 
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

function find(expresion){
   return expresion(arrayElements,6);
}

console.log(find(findElement));