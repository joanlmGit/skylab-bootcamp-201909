describe('Hooray.prototype.find',function(){
  
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

   it ('Should look undefined if we do not a parameter',function(){
      var myHooray= new Hooray(1,2,5,7, 'antonio');
      var elementFound= myHooray.find();
            
      expect(elementFound).toBe(undefined);

   });
});