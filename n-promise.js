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