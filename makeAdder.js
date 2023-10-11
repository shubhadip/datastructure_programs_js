// function makeAdder(...x) {
//   return function(...y) {
//     // console.log(x);
//     // console.log(y);
//     if(typeof x === 'object' && Array.isArray(y)) {
//       x = x.reduce((acc, init) => acc * init, 1)
//     }
//     if(typeof y === 'object' && Array.isArray(y)) {
//       y = y.reduce((acc, init) => acc * init, 1)
//     }
//     // x = x.reduce((acc, init) => acc * init, 0)
//     // y = y.reduce((acc, init) => acc * init, 0)
//    if(y){
//     return makeAdder(x * y);
//    }else{
//      return x
//    }
//   }
// };

// // console.log('makeAdder', makeAdder(1,4)(2,2)(3)());
// // console.log('makeAdder', makeAdder(1)(4)());
// // console.log('makeAdder', makeAdder(1,4)());
// console.log('makeAdder', makeAdder(1));
const sum = function (...args) {
    let total = args.reduce((acc,init) => acc + init, 0)
    function add(...args2) {
        if(args2.length){
            total = args2.reduce((acc,init) => acc + init, total)
            return add
        }
        return total;
    }

    return add
  }
  

console.log('sum', sum(1)(2)(2)());
console.log('sum', sum(1,2)(2,3)(2,4)());
console.log('sum', sum(1)(2)(2)());






const parent = (fn1) => {
    return function(...x) {
        let total = x.reduce(fn1, 1)
        function add(...y) {
            if(y.length) {
                total = y.reduce(fn1, total)
                return add
            }else {
                return total;
            }
        }
        return add
    }
}
const fn1 = (acc,curr) => acc = acc*curr
console.log(parent(fn1)(1,2)(2,3)());
