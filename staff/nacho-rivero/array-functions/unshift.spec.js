describe('unshift', function(){

    it('should throw error on undefined array', function() {
    
      var array;
    
      expect(function() { unshift(array); }).toThrowError(TypeError, 'undefined is not an array');
      
    });
  
    it('should throw error when you introduce an argument that is not an array', function(){
  
      expect(function() { unshift(123); }).toThrowError(TypeError, '123 is not an array');
      expect(function() { unshift('i am an array'); }).toThrowError(TypeError, 'i am an array is not an array');
  
    });
  
  })