var elemen;
var arrayElements=["Elena","Pedro","Lopez","Ricardo","2",6,45];
var isFound=false;
/**
 * 
 * @param {*} paramArray 
 * @param {*} elementfind 
 */
function findElement(paramArray,elementfind){
   for(var i=0; i<paramArray.length;i++){
      if (paramArray[i]==elementfind) {
         isFound=true;
      }
   }
   return isFound;
}

function find(expresion){
   return (expresion(arrayElements,mielemen));
}

console.log(find.findElement(arrayElements,6));