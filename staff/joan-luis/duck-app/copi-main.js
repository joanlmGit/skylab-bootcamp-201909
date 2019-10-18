var formu = document.getElementsByClassName('formulario')[0]
var lista=document.getElementsByClassName('ducks')[0]

function limpiar(elemento){
   elemento.innerHTML="";
}

function call(method, url,elementFound, callback){
   var xhr=new XMLHttpRequest;
   xhr.open(method,url + elementFound);
   callback()
}


formu.addEventListener("submit", function (e){
  
   e.preventDefault();
   lista.innerHTML="";
  
   var searchElemet=e.target.fieldSearch.value;
});

function resultSearch(){
   xhr.onreadystatechange = function () { //lo que llegue, la respuesta, le passamos una funcion que trabaja esa respuesta

      if (this.readyState == 4 && this.status == 201) {

          var duckis = JSON.parse(xhr.responseText); //parse nos pasa a array de objetos la respuesta, para poder tratarla con js

         
      }
  };

};

function printDuck(myDuck) {
   
   lista.innerText = " ";
   var ul = document.createElement('ul');
   lista.append(ul)
   ducks.forEach(function(duck) {
      var li = document.createElement('li');
      var titulo=document.createElement('h3');
      var img = document.createElement('img'); 
      var precio=document.createElement('p');
      
      img.src = duck.imageUrl;
      titulo=duck.title;
      precio=duck.price;
      
      ul.append(li);
      li.append(titulo);
      li.append(img);
      li.append(precio);

      li.addEventListener('click', function () {
      
         searchDuck(duck.id)
     });


   });
};

function paindUser()