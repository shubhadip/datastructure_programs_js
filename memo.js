const memo = (func) =>{
    let cache = {};
       return function(){
         const key = JSON.stringify(arguments);
         if(cache[key]){
           return cache[key];
         }
         else{
           const val = func.apply(this, arguments);
           cache[key] = val;
           return val;
       }
     }
}

var fib = memo(function(n){
  if (n < 2){
     return 1;
   }else{
     return fib(n-2) + fib(n-1);
   }
});

console.log(fib(11))



// function memoizeOnce(fn){
//   let result;
//   return function(){
//     if(result){
//       return result;
//     }
//     result = fn.call(this,arguments);
//   }
// }