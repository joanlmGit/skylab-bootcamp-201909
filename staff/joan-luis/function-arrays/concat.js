var myArray=['Joan', 'Pepeño','Antonio', 'Fermindelapraderaderioarriba'];
var mySecondArray=[1,2,5,8,9];
/**
 * 
 * @param {arrayOne} Array la primera array que se concatenara con la segunda array en la funcion mergeArrays 
 * @param {arraySecond} array serà concatenada despues del ultimo elemento de la arrayOne.
 */
function mergeArrays(arrayOne,arraySecond){
   
   var arrayResult=[];
   arrayResult+=arrayOne +arraySecond;
  
   return arrayResult;
}

function concat(expresion){
   var arrayAdd=[];
   return arrayAdd+=expresion(myArray,mySecondArray);
}

console.log(concat( mergeArrays));