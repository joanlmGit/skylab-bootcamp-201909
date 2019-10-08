

var arrayNumbers=[1, 2, 3,4,5];

function addSix(num){
   return num+6;
}

function addSeven(num){
   return num+7;
}

function addSEigth(num){
   return num+8;
}

function map(auxArray,expression){
   var newArray=[];
   
   for (var i=0 ; i<auxArray.length ; i++){
      newArray[i] = expression(auxArray[i])
   }
   return newArray;
}


console.log(map(arrayNumbers,addSix))