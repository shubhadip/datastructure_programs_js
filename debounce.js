
var debounce = (func, time) => {
    let inDecounce
    return (...args) => {
        clearTimeout(inDecounce)
        inDecounce = setTimeout(()=>func(...args),time)
    }
}

debounce((data)=>{
    console.log(data)
},3000)('test')

debounce((x,y) => console.log(x + y), 4000)(3,4)
debounce((x,y) => console.log(x + y), 5000)(23,34)
