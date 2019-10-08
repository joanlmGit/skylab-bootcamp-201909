var miArray=[1, 2, 5, 12, 25];
var  arrayChange=[];
function miMap(auxArray,idx){
   debugger
   var newArray=[];
   
   for (var i=0; i< idx;i++){
      newArray=(auxArray[i] +(6/2));
   }
   return newArray;
}

arrayChange=miMap(miArray,miArray.lenght);

function desempilaUltimo(auxArray){
   
   var newArray=[];
   for (i=0; i<auxArray.lenght-1;i++){
      newArray=auxArray[i];
   }
   return newArray;
};

console.log(arrayChange);