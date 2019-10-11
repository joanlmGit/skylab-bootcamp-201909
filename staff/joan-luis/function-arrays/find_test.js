descripcion("find",function()){
   it ('Should the element was founded',function(){
      var arrayElements=["Elena","Pedro","Lopez","Ricardo","2",6,45];
     
      
      expect(find(arrayElements,6)).Tobe(true);
      expect(find(arrayElements,'Joan')).Tobe(false);
   });

   it ('should show failure for not passing parameter element', function(){
      var arrayElements=["Elena","Pedro","Lopez","Ricardo","2",6,45];

      expect(find(arrayElements)).Tobe('undefined');

   });
};
