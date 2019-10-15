describe('index',function(){
  
   it ('should show the element found', function(){
      var myHooray= new Hooray(1,2,5,7, 'antonio');
      function  foundfn(elemento){
         return elemento==='antonio';
      }
      var result= myHooray.find(foundfn);
            
      expect(result).toBe('antonio');
   });

   it ('Should undefined if the element not found',function(){
      var myHooray= new Hooray(1,2,5,7, 'antonio');
      function  foundfn(elemento){
         return elemento===6;
      }
      var result= myHooray.find(foundfn);
            
      expect(result).toBe(undefined);
   });

   it ('Should undefined if hooray have any or not definition',function(){
      var myHooray= new Hooray();
      var elementFound= myHooray.find(myHooray);
            
      expect(elementFound).toBe(undefined);

   });
});