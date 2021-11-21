define({
  state: 'Maharashtra',
  city: 'Mumbai'
});


// named 
define('amd-1',function(){

  return {
    
  }
});


// named with dependencies
define('amd-1',['abc', 'def'],function(dep1, dep2){

  return function(){
    
  }
});