const  arr = [1,2,3,4,5,5,4]
let Set1 = new Set()
arr.forEach((element)=>{
    if(Set1.has(element)){
        console.log("Duplicate Element in Array : ", element);
    }else{
        Set1.add(element)
    }
})

