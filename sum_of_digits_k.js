let numbers = [1,8,5,9,6];
let k = 14;

// n*n
numbers.forEach((element,index) => {
    let temp = k - element
    let indexofpair = numbers.indexOf(temp)
    if(indexofpair > -1 && index != numbers[temp] ){
        console.log("answer ( "+element+","+numbers[indexofpair]+" )")
    }
});