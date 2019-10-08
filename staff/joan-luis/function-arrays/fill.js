var arrayPrueba=[2,5,4,9,3,];


function changeElementsByElement(array,valeuRemplace,indexFrom,indexEnd){
   try{
      if (!(array instanceof Array)) throw TypeError (array + ' is not array');
      if ((typeof valeuRemplace!='string')) TypeError (valeuRemplace + ' is not a string')
   }catch (e){
      if (e==' is not array') alert("is not array");
      if ( e==' is not a string')  alert(" is not a string or correct value");      
      
   }
   for (indexFrom;indexFrom<indexEnd;indexFrom++){
      array[indexFrom]=valeuRemplace;
   }
   return array;
}

function fill(array,expresion){
   try{
      if (!(array instanceof Array)) throw TypeError (array + ' is not array');
      if (typeof expresion!='function') throw TypeError (expresion + ' is not a function');
   }catch (e){
      if (e==' is not array') alert("is not array");
      if (e==' is not a function') alert("is not a function");  
   }
   
   return array=expresion(array,2,2,4);
}

console.log(fill(arrayPrueba,changeElementsByElement));