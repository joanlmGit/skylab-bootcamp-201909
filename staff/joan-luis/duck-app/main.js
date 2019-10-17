var formu = document.getElementsByClassName('formulario')[0]
var lista=document.getElementsByClassName('ducks')[0];
debugger



formu.addEventListener("submit", function (e){
  
   e.preventDefault();
   lista.innerHTML="";
  
   var searchElemet=e.target.fieldSearch.value;

   var xhr = new XMLHttpRequest;

   xhr.open('GET', 'https://duckling-api.herokuapp.com/api/search?q=' + searchElemet);

   xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 201) {
         var ducks = JSON.parse(xhr.responseText);

         var ul = document.createElement('ul');
         lista.append(ul);
        
         printDuck(ducks);
      }
   };

   xhr.send();
});

function searchDuck(elementSearch,callback) {

   var xhr = new XMLHttpRequest; //objecto que generamos para llamar al ajax

   xhr.open('GET', 'http://duckling-api.herokuapp.com/api/ducks/' + elementSearch); //hacemos una llamada (con un query= green) endpont: url donde podemos solicitar 

   xhr.onreadystatechange = function () { //lo que llegue, la respuesta, le passamos una funcion que trabaja esa respuesta

       if (this.readyState == 4 && this.status == 201) {

           var duckis = JSON.parse(xhr.responseText); //parse nos pasa a array de objetos la respuesta, para poder tratarla con js

           printDuck(duckis);
       }
   };

   xhr.send();
}

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
}

