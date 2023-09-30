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
