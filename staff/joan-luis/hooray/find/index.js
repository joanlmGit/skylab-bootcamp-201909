
function Hooray() {
   for (var i = 0; i  < arguments.length; i++)
       this[i] = arguments[i];

   this.length = arguments.length;
}





Hooray.prototype.find=function(expresion){
     
   var element;
   
   for(var i=0; i<this.length;i++){
      if (expresion(this[i])) {
         element=this[i];
      }
   }
   return element;
} 



