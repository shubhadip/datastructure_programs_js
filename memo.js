// const memo = (func) =>{
//     let cache = {};
//        return function(){
//          const key = JSON.stringify(arguments);
//          if(cache[key]){
//            return cache[key];
//          }
//          else{
//            const val = func.apply(this, arguments);
//            cache[key] = val;
//            return val;
//        }
//      }
// }

const memo = (func) =>{
  let cache = {};
     return (...arguments) => {
       const key = JSON.stringify(...arguments);
       if(cache[key]){
         return cache[key];
       }
       else{
         const val = func(...arguments);
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





const fib = (n, memo = {}) => {
  if(n in memo) return memo[n];
  if(n <= 2) return 1
  memo[n] = fib(n-2, memo) + fib(n-1, memo)
  return memo[n]
}

console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
console.log(fib(50))



function memoise(fn) {
  let cache = {};
  return function() {
    if(cache[cachkey]) return cache[cachkey];
    const response = fn.call(this, arguments);
    cache[cachkey] = response;
    return cache[cachkey];
  }
}