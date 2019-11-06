const fs=require('fs');

fs.readFile(process.argv[2],  (err, data) => {
  debugger  
  if(err) {
      console.err(err);
    } 
     
       console.log(data.toString().match(/\n/g).length);
    
  });