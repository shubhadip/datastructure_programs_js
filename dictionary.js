let dic = ['p','a','b','c','f','b','c','f','e','t','g','h','j','r','r','r']

let dicObj = {};
dic.forEach((element)=>{
    if(dicObj[element]){
        dicObj[element] = dicObj[element] + 1
    }else{
        dicObj[element] = 1
    }
})
var res = Object.keys(dicObj).reduce(function(a, b){ return dicObj[a] > dicObj[b] ? a : b });

console.log(dicObj);
console.log("max repeating word is ( " +res+ " : "+ dicObj[res]+ " )");
