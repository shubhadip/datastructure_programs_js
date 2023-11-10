const curry = f => {
    const reduceValue = (args) => {
        return args.reduce((acc,a)=>{
            return f.call(f,acc,a)
        })
    }
    const next = (...args) => {
        return (...x) => {
            if(!x.length){
                return reduceValue(args)
            }else{
                return next(...args, reduceValue(x))
            }
        }
    }
    return next()
}
const fn = curry((x,y)=> x*y)

console.log(fn(1)(2)(3,5)(4)())




// function curry(...x) {
//     let total  = x.reduce((acc,init) => acc+ init, init);
//     function add(...y) {
//         if(y.length > 0) {
//             total = y.reduce((acc,init) => acc + init, total);
//             return add
//         }
//         return total
//     }
//     return add 
// }