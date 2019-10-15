   
  
Hooray.prototype.find=function(expresion){
      
   if ((typeof expresioion!=='function' )) throw TypeError (elementfind + ' is not function');
      
   var element;
   
   for(var i=0; i<this.length;i++){
      if (expresion(this[i])) {
         element=this[i];
      }
   }
   return element;
} 



