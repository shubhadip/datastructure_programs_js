// const n = 7;
// const m = [2,3,4];

// const hsum = function(targetSum, numbers, memo){
//   if (targetSum in memo) return memo[targetSum];

//   if(targetSum === 0) return [];
//   if(targetSum < 0) return null;
  
//   let shortcomb = null
  
//   for(let num of numbers) {
//     const rem = targetSum - num;
//     const rest = hsum(rem, numbers, memo);
//     if(rest != null) {
//       const comb = [...rest, num]
//       if(shortcomb === null || comb.length < shortcomb.length){
//         shortcomb = comb
//       }
//     }
//   }
//   memo[targetSum] = shortcomb;
//   return shortcomb
// };

// console.log(hsum(n, m, {}));

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// let nums = [2,0,2,1,1,0];
// const hashMap = {};

// for(let n of nums) {
//   if(!hashMap[n]){
//     hashMap[n] = [n]
//   }else{
//     hashMap[n].push(n)
//   }
// };

// nums['length'] = 0
// for( let num in hashMap) {
//   nums.push(...hashMap[num])
// };
// console.log(nums);


// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 -13 -5 -7 -3 -6 11 6 5

// const temp = [-12, 11, -13, -5, 6, -7, 5, -3, -6];


// const nums = [1,0,0,9,1,0];
// const nums = [ 9, 1, 0, 1, 1 ]
// const nums = [-12, 11, -13, -5, 6, -7, 5, -3, -6]
// let temp;

// nums.forEach((item, index) => {
//   if(temp === undefined ) {
//     if(item < 0){
//       temp = index;
//     }
//   }else{
//     if(item < 0) {
//       const tempvalue = item;
//       nums[index] = nums[temp];
//       nums[temp] = tempvalue;
//       temp++
//     }
//   }
// });
// // console.log(temp);
// console.log('nums', nums)


// [8,0,3]
// [0,0]
// const nums1 = [...new Set([8,0,3]).values()];
// const nums2 = [...new Set([0,0]).values()];

// // return nums2.filter(x => nums1.includes(x))

// const p = {}
// const op = []

// nums1.forEach((item) => {
//   p[item] = item
// });


// nums2.forEach(t => {
//   if(Number.isInteger(p[t])){
//     op.push(t)
//   }
// })
// console.log(op)


// const t = [1, 2, 3, 4, 5];

// return [t.pop(), ...t];


const p = [-1,-100,3,99];
// for(let i = 0; i < k; i++) {
//   const first = op.length - k - i ;
//   const second = k - i;
  
//   const temp = op[first]
//   op[first] = op[second];
//   op[second] = temp
// };
// console.log(op);

// k = 1

// [1,2,3,4]

// [4, 1, 2, 3]

// 3,2,1,4


// let nums =  [1,2];

// let k = 5;
// while( k > nums.length){
//   if(k > nums.length){
//     k = k - nums.length
//   }  
// }

// first = nums.splice(0, nums.length-k).reverse()
// second = nums.splice(nums.length-k).reverse()
// nums.push(...[...first, ...second].reverse())
// console.log(nums);


// const dups = [1,3,4,2,2];
// let dup;
// var mySet = new Set();

// dups.forEach((item) => {
//   if(mySet.has(item)) {
//     dup = item
//   }else{
//     mySet.add(item);
//   }
// })
// return dup
// 19 11
// 90,100,78,89,67

// const median = arr.sort((a,b) => a-b)
// const length = median.length
// if(length % 2 === 0) {
//   medianIndex = Math.ceil((length)/2)
//   return Math.floor((median[medianIndex] + median[medianIndex-1]) /2)
// }else {
//   medianIndex = Math.floor((length)/2)
//   return median[medianIndex]
// }

//  console.log((merged.reduce((acc, item) => acc + item, 0)/merged.length).toFixed(4))
// }else{
//   console.log((merged.reduce((acc, item) => acc + item, 0)/merged.length))

// const nums1 = [], nums2 = [1,2,3,4,5];
// const nums1 = [3], nums2 = [-2, -1];
// const nums1 = [0,0,0,0,0]
// const nums2 = [-1,0,0,0,0,0,1]
// let t
// const  merged = [...nums1, ...nums2].sort((a,b) => a-b)
// console.log(merged);
// if(merged.length % 2 === 1) {
//   console.log('adasd', Math.floor((merged.length/2)))
//   console.log('merged', merged)
//   t = merged[Math.floor((merged.length/2))]
// }else{
//   const temp = Math.floor(merged.length/2)
//   const val = merged[temp] + merged[temp-1]
//   t = (val)/2
// }
// console.log(t); 

// let nums1 = [1], m = 1, nums2 = [], n = 0

// let i = nums2.length - 1;
// var merge = function(nums1, m, nums2, n) {
//   m--;
//   n--;
//   let temp = nums1.length - 1;
//   while (temp >= 0) {
//     if (n > -1 && m > -1 && nums1[m] >= nums2[n]) {
//       nums1[temp] = nums1[m];
//       nums1[m] = nums2[n];
//       m--;
//     }
//     else if (n > -1) {
//       nums1[temp] = nums2[n--];
//     }
//     temp--;
//   }
// }
// merge(nums1, m, nums2, n);

// nums1 = [-1,0,0,3,3,3,0,0,0]
// nums2 = [1,2,2]

// nums1.forEach((item, index) => {
//   if(item === 0) {
//       nums1[index] = nums2.shift() || 0
//   }
// })  ;
// nums1 = nums1.sort((a,b) => a-b);
// console.log(nums1)
// var x = -121;
// if(x < 0) {
//   return false
// }else {
//   const str = x.toString().split('').reverse().join('');
//   const str1 = x.toString()
  
//   if(str1 === str) {
//     console.log('true')
//   }
// }


// var nums = [2,2], target = 2
// let temp =  [];

// nums.forEach((item, index) => {
//   if(item === target) {
//     temp.push(index)
//   }
// });
// if(temp.length >= 2){
//   const min = Math.min(...temp)
//   const max = Math.max(...temp)
//   console.log(temp)
//   return [min, max]
// }else if(temp.length == 1 ){
//   console.log(temp)
//   return [temp[0] , temp[0]]
// }else {
//   return [-1, -1]
// }

// nums1 = [2,2,1,1,1,2,2]

// const hashMap = {}

// nums1.forEach(element => {
//   if(!hashMap[element]) {
//     hashMap[element] = 1
//   }else{
//     hashMap[element] += 1 
//   }
// });
// let max
// Object.keys(hashMap).forEach((data) => {
//   if(max === undefined) {
//     max = hashMap[data]
//     index = data
//   }else if(hashMap[data] > max) {
//     max = hashMap[data]
//     index = data
//   }
// });

// return index


// const nums = [3,0,1];
// const tp = nums.sort((a,b) => a-b);
// console.log(tp)

// const t1 = [9,6,4,2,3,5,7,0,1];

// const sum1 = t1.reduce((acc, item) => acc + item ,0)
// const sum2 = Array.from(Array(t1.length + 1).keys()).reduce((acc, item) => acc + item ,0)
// console.log(sum1, sum2)
// let A = 978, B = 518, C = 300
//   temp = [A, B, C];
//   const Max = Math.max(...temp)
//   const Min = Math.min(...temp);
//   return temp.filter((item) => ![Max, Min].includes(item))



function factorial(n, list) {
  if(n === 1 || n === 0) {
    return 1
  }else {
    if(list.length === 0) {
      list = ['*','/','+','-']
    }
    const op = list.shift()
    if(op === '*'){
      console.log(`${n} * ${n-1}`)
      return n * factorial(n-1, list)
    }else if( op === '/'){
      console.log(`${n} / ${n-1}`)
      return Math.floor(n / factorial(n-1, list))
    }else if(op === '+') {
      console.log(`${n} + ${n-1}`)
      return n + factorial(n-1, list)
    }else {
      console.log(`${n} - ${n-1}`)
      return n - factorial(n-1, list)
    }
    
  }
}

// console.log(factorial(4, ['*','/','+','-']));


// function interativeFactorial(){
//   let temp = ['*','/','+','-'];
//   let ans = 10;
//   let result = 0;
//   for(let i = 10; i > 1; i--) {
//     if(temp.length === 0) {
//       // console.log('called');
//       temp = ['*','/','+','-']
//     }
//     if(temp.length === 4) {
//       const op = temp.shift();
//       ans *= (i)
//     }else if(temp.length === 3) {
//       const op = temp.shift();
//       ans = (ans / (i)) >> 0
//     }else if(temp.length === 2) {
//       const op = temp.shift();
//       ans = ans + (i);
//       // ans = 0;
//     }else if(temp.length === 1){
//       const op = temp.shift();
//       ans = -(i)
//     }
//   }
  //   if (ans !== 0) {
  //     result += ans;
  // }
//   return ans
// }
// console.log(interativeFactorial(4));

//  - 6 * 5 / 4 + 3 - 2 * 1


// var clumsy = function(N) {
//   var block = N;
//   var result = 0;
//   var operations = ["*", "/", "+", "-"];
//   var index = 0;
  
//   while (--N > 0) {
//       switch (operations[index % 4]) {
//           case "*":
//               block *= N;
//               break;
//           case "/":
//               block = (block / N) >> 0;
//               break;
//           case "+":
//               result += block + N;
//               block = 0;
//               break;
//           case "-":
//               block = -N;
//               break;
//       }
//       index++;
//   }
  
//   if (block !== 0) {
//     console.log(block)
//       result += block;
//   }
  
//   return result;
// };

// console.log(clumsy(10))

// let k = 2, n = 4;
// let arr = [1,5,8,10];

// arr = arr.sort((a,b) => a-b);

// let ans = arr[n-1] - arr[0];
// let minleft = arr[0] + k; 
// let maxright = arr[n-1]-k;
// // console.log(maxleft)
// // console.log(maxrigh)
// for(let i = 0; i < n-1; i++){
//   let max = Math.max(maxright, arr[i]+k);
//   let min = Math.min(minleft, arr[i+1]-k);
//   // console.log(min, max)
//   if(min > 0) {
//     ans = Math.min(ans, max-min);
//   }
// }
// console.log(ans)
// return ans;


// const slow = (x) => {
//   console.log('called',x );
// }

// const slower = (fn) => {
//   const cache = {}
//   return (args) => {
//     if(cache[args]) {
//       return cache[args]
//     }else {
//       const res = fn(args);
//       cache[args] = res;
//       return res
//     }
//   }
// }

// const p1 = slower(slow);

// console.log(p1(4))


// function sayHi(args){
//   console.log(args)
//   return this.name + `${args.reduce((acc,item) => acc.concat(item),'')}`;
// }

// const p1 = {
//   name: 'shubh'
// };
// console.log(sayHi.apply(p1,[['qwe','asdasd']]));


// function debounce(fn, time){
//   let isCalled;
//   return function(){
//     clearTimeout(isCalled);
//     isCalled = setTimeout(()=>{
//       fn.call(this, ...arguments)
//     }, time)
//   }
// }

// let animal = {
//   eats: true
// };

// const rabbit = {

// };
// rabbit.__proto__ = animal
// const rabbit = Object.create(animal) 
// Object.setPrototypeOf(rabbit, animal )
// console.log(rabbit.__proto__)


// Object.create(null, {
//   toString: {
//     value() {
//       return Object.keys(this).join(',')
//     }
//   }
// })

// let user = {
//   firstName: "John",
//   sayHi(){ 
//     console.log(`Hello, ${this.firstName}!`);
//   }
// };

// setTimeout(() =>{
//   user.sayHi()
// }, 1000)


function mul(a,b) {
  return a * b;
};

const temp = mul.bind(null, 4);
console.log(temp(2));


function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = (sc) => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

function ploadScript(src){
  new Promise((resolve, reject) => {
    const scriptTag = document.createElement('script');

    scriptTag.src = 'https://www.google.com';
    scriptTag.onload = () => resolve(scriptTag);
    scriptTag.onerror = () => reject(new Error('adad'));
    document.body.append(scriptTag)
  })
}