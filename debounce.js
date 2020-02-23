
var debounce = function(func, time){
    let inDecounce
    return function(){
        let arg = arguments
        clearTimeout(inDecounce)
        inDecounce = setTimeout(()=>func.call(this, arg),time)
    }
}

debounce((data)=>{
    console.log(data[0])
},3000)('test')

