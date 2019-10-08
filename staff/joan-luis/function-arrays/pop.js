



var worker=['Antonio', 'Juan', 'Francisco','Javi', 'Alex'];
/**
 * 
 * @param {*} array 
 */
function removeLastElement(array){
   var newArray=[];
   var newIndex=array.length-1;
   for (var i=0; i<newIndex;i++) {
      newArray[i]=array[i];
   }
   array.length=0;
   for (var i=0;i<newArray.length;i++){
      array[i]=newArray[i];
   }
   return array;
}

function pop(auxArray,expresion){
   
   return auxArray=expresion(auxArray);
}

console.log(pop(worker,removeLastElement));

