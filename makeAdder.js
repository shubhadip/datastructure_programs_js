function makeAdder(...x) {
  return function(...y) {
    if(typeof x === 'object' && Array.isArray(y)) {
      x = x.reduce((acc, init) => acc * init, 0)
    }
    if(typeof y === 'object' && Array.isArray(y)) {
      y = y.reduce((acc, init) => acc * init, 0)
    }
    // x = x.reduce((acc, init) => acc * init, 0)
    // y = y.reduce((acc, init) => acc * init, 0)
   if(y){
    return makeAdder(x * y);
   }else{
     return x
   }
  }
};

// console.log('makeAdder', makeAdder(1,4)(2,2)(3)());
// console.log('makeAdder', makeAdder(1)(4)());
// console.log('makeAdder', makeAdder(1,4)());
console.log('makeAdder', makeAdder(1)(2)(2)());
console.log('makeAdder', makeAdder()());
