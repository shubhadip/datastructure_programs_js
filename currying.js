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
const fn = curry((x,y)=> x+y)

console.log(fn(1)(2)(3)(4)())