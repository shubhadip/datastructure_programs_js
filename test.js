// const debounce = (fn, time) => {
//   let timer;
//   return function(){
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       return fn.apply(this,arguments);
//     },time)
//   }
// };

// console.log('called', debounce(()=>{
//   console.log('data');
// },3000)());

// const throttle = (fn, time) => {
//   let timer;
//   return function(){
//     if(!timer){
//       timer = setTimeout(() => {
//         clearTimeout(timer)
//         return fn.apply(this,arguments);
//       }, time)
//     }
//   }
// }

// const stack = function(){
//   this.count = 0;
//   this.object = {}

//   this.push = function(data){
//     this.count++;
//     this.object[this.count] = data;
//   }

//   this.pop = function(){
//     const currentValue = this.object[this.count]
//     delete this.object[this.count];
//     return currentValue
//   }

//   this.peek = function(){
//     return this.object[this.count-1];
//   }

//   this.length = function(){
//       return this.count
//   }
// };

// const s = new stack();
// // console.log(s);
// s.push('1')
// s.push('3')
// console.log(s.length());

// var ll = function(){
//   var length =0;
//   var head = null;

//   var node = function(data){
//     this.element = data;
//     this.next = null;
//   }

//   this.add = function(data){
//     const n = new node(data);

//     if(head === null) {
//       head = n;
//     }else{
//       let cp = head;
//       while(cp && cp.next) {
//         cp = cp.next;
//       }
//       cp.next = n;
//     }
//     length++;
//   }

//   this.remove = function(data){
//     const cp = head;
//     let pn;
//     if(cp.element === data){
//       head = cp.next
//     }else{
//       while(cp.element != data){
//         pn = cp;
//         cp = cp.next;
//       }
//       pn.next = cp.next;
//       length--
//     }
//   }

//   this.size = function(){
//       return length
//   }

//   this.elementAt = function(index){
//     if(index >= this.size()){
//         return ('No Element At Position '+index +' :( ' )
//     }
//     var currentNode = head
//     var initialIndex = 0
//     while(initialIndex < index){
//         currentNode = currentNode.next
//         initialIndex++
//     }
//     return currentNode.element
// }
// }
// let LinkList = new ll()
// LinkList.add("second")
// LinkList.add("third")
// LinkList.add("fourth")

// console.log(JSON.stringify(LinkList.size()))

// console.log('ElementAt 0 :',LinkList.elementAt(0))
// console.log('ElementAt 1 :',LinkList.elementAt(1))
// console.log('ElementAt 2 :',LinkList.elementAt(2))

// function innerFunction(){
//   return new Promise((resolve, reject) => {
//     return setTimeout(()=>{
//       resolve('data')
//     },1000)
//   })
// }

// function repeat(num) {
//   if(n==0) {
//     return Promise.resolve('completed')
//   }else{
//     return innerFunction.then((data) => {
//       return repeat(n-1);
//     })
//   }
// }

// repeat(5).then((data) => {
//   console.log(data)
// })

// function innerFunction(data) {
//   const temp = new Promise((resolve,reject) => {
//     return setTimeout(()=> {
//       resolve(data);
//     });
//   });
//   return temp
// }

// function repeat(n){
//   if(n === 0) {
//     return Promise.resolve('complete');
//   }else{
//     return innerFunction(n).then((data)=> {
//       console.log(data);
//       return repeat(n-1)
//     })
//   }
// }

// repeat(8).then((d) => {
//   console.log(d);
// })

// const memo = (func)=>{
//   let cacheKey = {};
//   return function(){
//     console.log(arguments)
//     // const key = JSON.stringify(arguments);
//     // const key = JSON.stringify(arguments[0]);
//     if(cacheKey[key]){
//       return cacheKey[key];
//     }else{
//       const response = func.apply(this, arguments);
//       // const response = func.apply(this, arguments[0]);
//       cacheKey[key] = response;
//       return response
//     }
//   }
// }

// const fibbo = memo(function(n){
//   if(n < 2){
//     return 1
//   }else{
//     return fibbo(n-2) + fibbo(n-1)
//   }
// })

// console.log(fibbo(4))

// const steps =4
// for (var i = 0; i++ < steps; ) {

//   var line = '';
//   var spaces = steps - i;

//   for(let j = steps; j > 0; j--) {
//     if( j <= i){
//       line += '#';
//     }else{
//       line += '_';
//     }
//   }

//   console.log(line);
// }
// console.log(temp)

// const arr = [1,3,5,7,9];
// let max = 0;
// let min = 0;
// const sortedArray = arr.sort();

// sortedArray.forEach((elem, index) => {
//   if(index != 0) {
//     max+= elem
//   }
//   if(index != sortedArray.length-1) {
//     min += elem
//   }
// })
// console.log(max, min);

// const candles = [4,4,1,3];

// const max = Math.max(...candles);
// const data = {}

// candles.forEach((elem) => {
//   if(!data[elem]){
//     data[elem] = 1
//   }else{
//     data[elem] += 1
//   }
// })
// console.log(data);

// const grades = [73,67,38,33];
// const response = [];

// grades.forEach((elem) => {
//     const op = elem % 5
//     const nextMultiple = elem - op + 5
//     const diff = nextMultiple - elem
//     const isValid = diff < 3 &&  elem >= 38
//     if (isValid) {
//         response.push(nextMultiple)
//      }else{
//       response.push(elem)
//     }
// })
// console.log(response)
// return response

// const time = '07:05:45PM'
// let op = time
// if(time.includes('PM')){
//   const arrayTimeFormat = time.split(':');
//   if(arrayTimeFormat[0] === 12) {

//   }else{
//     (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
//          (arr[0] == 12 ? '00' : arr[0]);
//   }
//   arrayTimeFormat[0] = hr
//   op = arrayTimeFormat.join(':')
// }
// console.log(op)

// const data = [
//   3,4,21,36,10,28,35,5,24,42,2
// ]

// let max;
// let min;
// let maxCount = 0;
// let minCount = 0;
// data.forEach((elem) => {
//   if(min == undefined) {
//     min = elem;
//   }else if( min!= undefined && elem < min) {
//     minCount++
//     min = elem
//   }
//   if(max == undefined) {
//     max = elem;
//   }else if( max!= undefined && elem > max) {
//     maxCount++
//     max = elem
//   }
// })
// return [maxCount, minCount]

// Array.prototype.myReduce = function(fn, intialValue){
//   const dataArray = this;
//   dataArray.forEach((item) => {
//     intialValue = intialValue != undefined ? fn(intialValue, item) : item;
//   })
//   return intialValue;
// };

// console.log('reduce',[[1],[2],[3]].myReduce((a,b) => a.concat(b)),[])

// Array.prototype.myMap = function(fn, initialValue = []) {
//   console.log(this.valueOf());
//   const dataArray = this;
//   dataArray.forEach((item) => {
//     initialValue.push(fn(item));
//   })
//   return initialValue
// }

// console.log('map',[1,2,3].myMap((a) => a*2))

// const debounce =  (fn, time) => {
//   let isTimeout;
//   return function(){
//     clearTimeout(isTimeout);
//     isTimeout = setTimeout(()=>{
//       fn.call(this,arguments);
//     },time)
//   }
// };

// debounce(()=>console.log('asd'), 1000)('asd')
// debounce((d)=> () => console.log(d), 2000)('asd1')

// var t = [1, 3, 2, 6, 1, 2]
// k = 3;
// let count =0
// t.forEach(element => {
//   const offset = Math.abs(k-element);
//   if(t.indexOf(offset) > -1){
//     count++;
//   }
// });

// console.log(count);

// Array.prototype.myReduce = function(fn, init) {
//   const values = this.valueOf();
//   values.forEach(element => {
//     init = init != undefined ? fn(init,element) : element;
//   });
//   init;
// }

// Array.prototype.myMap = function(fn, init = []) {
//   const values = this.valueOf();
//   values.forEach(element => {
//     init.push(fn(element));
//   });
//   init;
// }

// function fact(n){
//   if( n <= 2 ){
//     return 1
//   }else{
//     return fact(n-2) + fact(n-1);
//   }
// }
// console.log(fact(7));

// const t = "aaa"
// let ans = 0;

// let i = -1;
// let j = -1;
// const hash = {}

// while(true){
//   let f1 = false;
//   let f2 = false;

//   while(i < t.length-1){
//     f1 = true
//     i++;
//     hash[t[i]] = hash[t[i]] ? hash[t[i]] + 1 : 1
//     if(hash[t[i]] === 2 ){
//       break;
//     }else{
//       const len = i-j;
//       if(len > ans){
//         ans = len
//       }
//     }
//   }

//   while(j < i){
//     f2 = true
//     j++;
//     hash[t[j]] = hash[t[j]] - 1;
//     if(hash[t[j]] == 1) {
//       break;
//     }
//   }

//   if(!f1 && !f2){
//     break;
//   }
// }

// console.log(ans);

// const t= [1,2,4,5,6,8]
// let psum = 15;

// for(let i = 0 ; i < t.length-2 ; i++){
//   for(let j = i+1 ; j < t.length-1 ; j++){
//     for(let k = j+1 ; k < t.length ; k++){
//       if(t[i] + t[j] + t[k] === psum){
//         console.log(`${t[i]}, ${t[j]}, ${t[k]}`)
//       }
//     }
//   }
// }

// const t =  'asdfg';
// let ans = 0 ;
// let i = -1;
// let j = -1;
// let k = 0;
// const hash = {};

// while(true){
//   let f1 = false;
//   let f2 = false;

//   while(i < t.length-1){
//     f1 = true
//     i++;
//     hash[t[i]] = hash[t[i]] ? hash[t[i]] + 1 : 1
//     if(hash[t[i]] == 2 ){
//       break;
//     }else{
//       const diff = i - j;
//       if(diff > ans){
//         ans = diff
//       }
//     }
//   };

//   while(j < i){
//     f2 = true
//     j++;
//     hash[t[j]] -= 1;
//     if(hash[t[j]] == 1){
//       break
//     }
//   }
//   if(!f1 && !f2){
//     console.log(ans);
//     break
//   }
// }

// const b = 'skks'
// const hash = {}
// b.split('').forEach((elem) => {
//   if(hash[elem]){
//     hash[elem] +=1
//   }else{
//     hash[elem] = 1
//   }
// });
// console.log(hash);

// const data = [1,2,3,4,1]
// const hash1 = {}
// const dups  = []

// data.forEach((elem) => {
//   if(hash1[elem]){
//     hash1[elem] += 1
//     dups.push(elem)
//   }else{
//     hash1[elem] = 1
//   }
// });

// console.log(dups)

// const btree = '0100110101';

// let x = 0;
// let y = 0;
// const len = btree.length;
// let c = 0;

// const arr = btree.split('');

// for(let i = 0; i< len; i++) {
//   if(arr[i] === '0'){
//     x++
//   }else{
//     y++
//   }
//   if(x == y){
//     c++
//   }
// }
// if(x != y) console.log('novalues')
// if(c){ console.log('asdasd',c)}

// var bst = function(){
//   this.root = null;

//   const Node = function(data){
//     this.data = data;
//     this.left = null
//     this.right = null
//   }

//   this.add = function(input){
//     if(this.root === null) {
//       this.root = new Node(input);
//       return
//     }else{
//       var searchTree = function(root) {
//         if(input < root.data){
//           if(root.left === null){
//             root.left = new Node(input);
//           }else{
//             return searchTree(root.left)
//           }
//         }else if(input >= root.data){
//           if(root.right === null){
//             root.right = new Node(input);
//           }else{
//             return searchTree(root.right)
//           }
//         };
//       };

//       return searchTree(this.root);
//     }
//   };

// }

// const bt = new bst();
// bt.add(100);
// bt.add(90);
// bt.add(150);
// console.log(bt);

// const BST = function(){
//   this.root = null;

//   const Node = function(data){
//     this.data = data;
//     this.left = null
//     this.right = null
//   };

//   this.add = function(value){
//     if(this.root == null){
//       this.root = new Node(value);
//     }else{
//       const searchTree = function(root){
//         if(value < root.data){
//             if(root.left == null){
//                 root.left = new Node(value)
//                 return
//             }else if(root.left != null){
//                 return searchTree(root.left)
//             }
//         }else if(value>root.data){
//             if(root.right == null){
//                 root.right = new Node(value)
//                 return
//             }else if(root.right != null){
//                 return searchTree(root.right)
//             }
//         } else {
//             return null
//         }
//     }
//       return searchTree(this.root)
//     }
//   }

//   this.findMin = function(data){
//     let current = this.root;

//     while(current.left != null){
//       current =  current.left
//     }
//     return current.data
//   }

//   this.findMax = function(data){
//     let current = this.root;

//     while(current.right != null){
//       current =  current.right
//     }
//     return current.data
//   }

//   this.printLeft = function(node){
//     if(node === null) return
//     if(node && (node.left || node.right)){
//       node && node.left && this.printLeft(node.left);
//       // if(node && node.left && node.left.data){
//       //   console.log(node && node.left && node.left.data);
//       // }
//       if(node && node.right && node.right.data){
//         console.log(node && node.right && node.right.data);
//       }
//       node && node.right && this.printLeft(node.right);
//     }
//   };

// }

// const b = new BST();

// b.add(100);
// b.add(250);
// b.add(50);
// b.add(75);
// b.add(300);
// b.add(45);
// b.add(280);

// // console.log(JSON.stringify(b));
// // console.log('min', b.findMin());
// // console.log('max', b.findMax());
// b.printLeft(b.root);

// function merge(left, right) {
//   const left = [];
//   const right = []
//   while(left.length && right.length){
//     if(left[0] < right[0]){
//       arr.push(left.unshift())
//     }else{
//       arr.push(right.unshift())
//     }
//   };
//   return [...arr, ...left, ...right];
// }

// function mergeSort1(arr){
//   const opp = arr.length/2
//   const left = arr.slice(0,opp);
//   return merge(mergeSort1(left), mergeSort1(arr));
// };

// mergeSort1([10,1,100,21,190,56,23,89])

// function quickSort1(arr){
//   const pivot= arr[arr.length-1];
//   const left = [];
//   const right = [];

//   for(let i = 0 ; i< arr.length-1; i++){
//     if(arr[i] < pivot){
//       left.push(arr[i])
//     }else if(arr[i] > pivot){
//       right.push(arr[i])
//     }
//   };

//   return [
//     ...quickSort1(left),
//     pivot,
//     ...quickSort1(right)
//   ]
// };

// const f1 = (callback) => {
//   return callback()
// };

// console.log(f1(() => { console.log('i am callback')}));

// function func(...args){
//   for(let value of arguments){
//       console.log(value);
//   }
// }

// // driver code
// func(1, "Hello", true);

// const randMOn = (function(){
//   return "i am amdjs"
// })()
// console.log(randMOn);

// const calculator = (x,y) => {
//   const add = () => x+y;
//   const subtract = () => x-y;
//   const multiply = () => x*y;
//   const divide = () => x/y;

//   return {
//     add,
//     subtract,
//     multiply,
//     divide
//   }
// };

// const c = calculator(3,4);
// console.log(c.add());
// console.log(c.subtract());

// const debounce = (fn, time) => {
//   let isSet;
//   return (...args) => {

//     if(isSet) clearTimeout(isSet);

//     isSet = setTimeout(() => {
//       fn(...args);
//     }, time)
//   }
// };

// const throttle = (fn, time) => {
//   let isSet;
//   return (...args) => {

//     if(isSet) return

//     isSet = setTimeout(() => {
//       fn(...args);
//       clearTimeout(isSet);
//     }, time)
//   }
// };

// const singleTon  = (function(){
//   let instance;
//   const createINstance = () => {
//     return new Object('asasdas')
//   };

//   return {
//     getInstance: function() {
//       if(instance){
//         return instance
//       }
//       instance = createINstance()
//     }
//   }
// })()

// const p = [1,2,3,4,5,6,7,8,9,10]
// const batches = {1:[], 2:[]};

// for(let i =0; i < p.length; i++){
//   if(i<=5){
//     batches[1].push(new Promise((resolve,reject) => setTimeout(() => resolve(i), 1000)))
//   }else{
//     batches[2].push(new Promise((resolve,reject) => setTimeout(() => resolve(i), 2000)))
//   }
// }

// console.log(batches);

// setTimeout(() => {
//   Promise.all(batches[1]).then((data) => {
//     console.log(data)
//   })
//   Promise.all(batches[2]).then((data) => {
//     console.log(data)
//   })
// },3000)

// setTimeout(() => {
//   console.log(1)
// }, 0)

// function fn(dn1){
//   // setTimeout(() => {

//   // }, 4000)
//   Promise.resolve(dn1())
// };

// fn(() => { console.log('called')})

// for(let i = 0 ; i< 10 ; i++) {
//   setTimeout(() =>{
//     console.log(i)
//   },1000)
// };

// for(let i = 10 ; i> 0 ; i--) {
//   (function(i){
//     setTimeout(function(){
//       console.log(i)
//     },1000)
//   })(i)
// };

// runPromise(100).then((dat) => {
//   console.log(dat);
// })

const nums = [1, 2, 3, 4];
const op = [];
let init = 1;
for (let i = 0; i < nums.length; i++) {
  op[i] = init;
  init *= nums[i];
}

let afterPr = 1;
const final = [];
for (let j = nums.length - 1; j > -1; j--) {
  final[j] = afterPr;
  afterPr *= nums[j];
}

console.log(final);

// const comb = function(elems){
//   if(elems.length === 0) return [[]];
//   const firstEl = elems[0]
//   const res = elems.slice(1);
//   const wofirst = comb(res);
//   const withFirst = [];
//   wofirst.forEach(element => {
//     const tempWithFirst = [...element, firstEl];
//     withFirst.push(tempWithFirst);
//   });

//   return [
//     ...withFirst, ...wofirst
//   ]
// }
// console.log(comb([1,2,3]))

// const combs = function(data){
//   if(data.length === 0) return [[]];
//   const firstElement = data[0];
//   const restElements = data.slice(1);

//   const withoutFirst = combs(restElements);
//   const allCombs = [];

//   withoutFirst.forEach((elem)=> {
//     const withFirstElem = [...elem, firstElement];
//     allCombs.push(withFirstElem);
//   });

//   return [
//     ...withoutFirst, ...allCombs
//   ]
// };

// console.log(combs([1,2,4]))

// const perms = function(data){
//   if(data.length === 0) return [[]];
//   const firstElement = data[0];
//   const restElements = data.slice(1);

//   const withoutFirst = perms(restElements);
//   const allPerms = [];

//   withoutFirst.forEach((elem)=> {
//     for(let i = 0 ; i <= elem.length; i++){
//       const withFirstElem = [...elem.slice(0, i), firstElement, ...elem.slice(i)];
//       allPerms.push(withFirstElem);
//     }
//   });

//   return allPerms
// };

// console.log(perms([1,2,4]));

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// const g = new Node('g');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.left = f;
// c.right = g;

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
c.right = f;
b.right = e;
b.left = d;

let arr = [a];

console.log("************** bfs *************");

while (arr.length != 0) {
  const removedElement = arr.shift();
  console.log("removed", removedElement.data);
  if (removedElement.left != null) {
    arr.push(removedElement.left);
  }
  if (removedElement.right != null) {
    arr.push(removedElement.right);
  }
}

console.log("************** dfs *************");

arr = [a];
while (arr.length != 0) {
  const removedElement = arr.pop();
  console.log("removed", removedElement.data);
  if (removedElement.right != null) {
    arr.push(removedElement.right);
  }
  if (removedElement.left != null) {
    arr.push(removedElement.left);
  }
}

const p = "{{}}";

const stack = [];
let unbalanced = false;
for (let i = 0; i < p.length; i++) {
  if (p[i] == "{") {
    stack.push("{");
  } else if (p[i] == "}") {
    if (stack.length) {
      stack.pop("{");
    } else {
      unbalanced = true;
      return 0;
    }
  }
}

// class SnakeGame {
//   constructor(){
//     this.snakeBody = [
//       [4,1],
//       [4,3],
//       [4,2],
//       [4,4],
//     ]
//   };

//   draw(){
//     const grid = Array(10).fill().map(() => Array(10).fill(' '));
//     this.snakeBody.forEach((item) => {
//       const [row, col] = item;
//       grid[row][col] = '*'
//     });
//     // console.log('grid', grid);

//     grid.forEach((row) => console.log(row.join(' | ')))
//   };

//   move(direction){
//     const delta = {
//       up:[ -1, 0],
//       down:[ 1, 0],
//       right:[ 0, -1],
//       uleft:[ 0, 1]
//     };
//     const [drow, dcol] = delta[direction];
//     const [currentRow, currentCol] = this.snakeBody[this.snakeBody.length-1]
//     const [newrow, newcol] = [drow + currentRow , dcol + currentCol];
//     this.snakeBody.push([newrow, newcol]);
//     this.snakeBody.shift();
//   }
// };

// const g = new SnakeGame();
// console.log('adsd', g.draw());

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "promise1");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "promise2");
});

const promises = [promise1, promise2];

function race(promises) {
  new Promise((resolve, reject) => {
    promises.forEach((element) => {
      Promise.resolve(element).then(resolve).catch(reject);
    });
  });
}

const graph = {
  0: ["1", "2", "3"],
  2: ["4"],
  1: [],
  4: [],
  3: [],
};

console.log("********** bfs *********");
const bfs = (graph) => {
  const queue = ["0"];

  while (queue.length > 0) {
    const curr = queue.shift();
    console.log("p", curr);
    for (const neighbour of graph[curr]) {
      queue.push(neighbour);
    }
  }
};

bfs(graph);

console.log("********** dfs *********");
const dfs = (graph) => {
  const stack = ["0"];

  while (stack.length > 0) {
    const curr = stack.pop();
    console.log("p", curr);
    for (const neighbour of graph[curr]) {
      stack.push(neighbour);
    }
  }
};

dfs(graph);





function innerFunction(fn) {
  const promise = new Promise((resolve,reject) => {
    return setTimeout(() => {
      resolve(fn)
    }, 400)
  })
  return promise;
}

function repeat(val) {
  if(val === 0) {
    return Promise.resolve('completed')
  }else {
    return innerFunction(val).then((p) => {
      console.log(p);
      return repeat(n-1);
    })
  }
}

repeat(4).then((o) => {
  console.log(o)
})





function memo(fn) {
  let cache = {}
  return function() {
    const cacheKey = JSON.stringify(arguments);
    if(cache[cacheKey]) return cache[cacheKey]

    const val = fn.call(this, arguments)
    cache[cacheKey] = val
    return val;
  }
}


const fibbo = memo(function(v){
  if (v < 1) return 0;
  if (v < 2) return 1;
  return fibbo(n-2) + fibbo(n-1);
})

console.log(fibbo(11));

