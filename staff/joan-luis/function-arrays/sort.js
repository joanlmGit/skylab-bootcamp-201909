var arraySort=["Elena","Pedro","Lopez","Ricardo","2",6,45];
/**
 * 
 * @param {*} arrayToSort 
 */
function funcArraySort(arrayToSort){
   
   var letterOne, letterTwo;
   
   var auxArray;
   for (var i=0; i<arrayToSort.length;i++){
      for(var j=i+1; j<arrayToSort.length;j++){
         myString=arrayToSort[i]
         letterOne=String(myString)[0];
         myString=arrayToSort[j]
         letterTwo=String(myString)[0];
         
         
         if (letterOne<letterTwo) {
            
         }else{
            auxArray=arrayToSort[i];
            arrayToSort[i]=arrayToSort[j];
            arrayToSort[j]=auxArray;
         };
      };
   };
   
   
   return arrayToSort;
};

/**
 * 
 * @param {*} expresion 
 */

function sort(expresion){
   return expresion(arraySort);
}
console.log((sort(funcArraySort)));

