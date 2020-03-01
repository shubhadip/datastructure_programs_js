function innerFunction(){
    let temp = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('resolved')
        },1000)
    })
    return temp
}  

function repeat(n){
    if(n==0){
        return Promise.resolve('completed')
    }else{
        return innerFunction().then((steps)=>{
            console.log(steps)
            return repeat(n-1)
        })
    }

}
repeat(5).then((data)=>{
    console.log(data)
})