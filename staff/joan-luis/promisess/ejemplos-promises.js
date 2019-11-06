var promise = new Promise(function(resolve, reject) {
  
  function sayHello() {
    resolve('Hello World!')
  }

  setTimeout(sayHello, 3000)

})

console.log(promise)
