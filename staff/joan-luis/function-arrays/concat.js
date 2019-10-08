var myArray=['Joan', 'Pepeño','Antonio', 'Fermindelapraderaderioarriba'];
var mySecondArray=[1,2,5,8,9];

function mergeArrays(arrayOne){
   var arrayResult=[];
   arrayResult+=arrayOne;
  
   return arrayResult;
}

function concat(array,expresion){
   var arraySecond=[];
   
   return arraySecond+=expresion(myArray);
}

console.log(concat(mySecondArray, mergeArrays));