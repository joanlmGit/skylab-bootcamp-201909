//Eliminar el primer elemento de un array

var arrayNumbers=[1,2,3,4,5,6];
/**
 * 
 * @param {*} array 
 */
function deleteFirtsElement(array){
   debugger
   if (array.length==0){
      alert("empty element");
   }
   var cointainerArray=[];
   for (i=1;i<array.length;i++){
      cointainerArray+=array[i];
   }
   array.length=0;
   for(var i=0;i<cointainerArray.length;i++){
      array[i]=cointainerArray[i];
   }
   return array;
}

function shift(array,expresion){
   return array=expresion(array);
}

console.log(shift(arrayNumbers,deleteFirtsElement));

