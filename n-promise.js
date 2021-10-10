function innerFunction(n){
    let temp = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(n)
        },1000)
    })
    return temp
}  

function repeat(n){
    if(n==0){
        return Promise.resolve('completed')
    }else{
        return innerFunction(n).then((steps)=>{
            console.log(steps)
            return repeat(n-1)
        })
    }

}
repeat(5).then((data)=>{
    console.log(data)
})



// function innerPromise(data){
//   return new Promise((resolve) => {
//     const batch = [data*1,data*2,data*3,data*4].map((item) => {
//       return new Promise((resolve,reject) => {
//         setTimeout(( ) => {
//           resolve(item)
//         },2000) 
//       })
//     })
//     setTimeout(() => {
//       resolve(Promise.all(batch)); 
//     }, 3000)
//   })
// }


// function runPromise(arg) {
//   if(arg == 0) {
//     return Promise.resolve('completed')
//   }else{
//     // recursively call till last Element
//     return innerPromise(arg).then((res) => {
//       console.log('res',res);
//       return runPromise(arg-1)
//     })
    
//   }
// }