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
