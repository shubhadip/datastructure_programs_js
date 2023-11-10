const fibbo = (n, cache={}) => {
    if(cache[n]) return cache[n];
    if(n <=2) return 1 
    cache[n] = fibbo(n-2, cache) + fibbo(n-1, cache); 
    return cache[n]
}

console.log(fibbo(50))


// grid traveller

let cache = {};

function gridTraveller(m,n) {
    const key =`${m},${n}`;
    if(cache[key]) return cache[key] 
    if(m === 0 || n === 0) return 0;
    if(m === 1 || n === 1) return 1;
    const val = gridTraveller(m-1,n) + gridTraveller(m,n-1);
    cache[key] = val;
    return val
}

console.log(gridTraveller(1,1));
console.log(gridTraveller(2,3));
console.log(gridTraveller(3,2));
console.log(gridTraveller(3,3));
console.log(gridTraveller(10,10));


cache = {};

function canSum(targetSum,numbers) {
    if(targetSum < 0) return false;
    if(targetSum === 0) return true;
    for(let num of numbers) {
        const rem = targetSum - num;
        if(canSum(rem, numbers)) {
            return true;
        }
    }
    return false
}

console.log(canSum(7, [5,3,4,7]));

const vals = [];
function howSum(targetSum, numbers) {
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
    
    for(let num of numbers) {
        const rem = targetSum - num;
        const remainderResult = howSum(rem, numbers)
        if(remainderResult !== null) {
            console.log('asd', remainderResult,rem)
            return [remainderResult,rem]
        }
    }
    return null
}

console.log(howSum(7, [2,3]));
console.log(vals);