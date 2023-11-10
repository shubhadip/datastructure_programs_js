function myMap(fn) {
    const op = []
    this.forEach(element => {
        const val = fn.call(this, element);
        op.push(val);
    });

    return op;
}

function myReduce(fn, init) {
    this.forEach((element) => {
        init = init != undefined ? fn(init, element) : init
    })
    return init;
}
const fn = (a) => {
    return a*a;
}

const fn1 = (a, b) => {
    return a.concat(b);
}
Array.prototype.myMap = myMap;
console.log([1,2,3,4,5].myMap(fn))

Array.prototype.myReduce = myReduce;
console.log([1,2,3,4,5].myReduce(fn1, []))


// function myMemo(fn) {
//     let cache = {};
//     return function() {
//         let cachekey = JSON.stringify(arguments);
//         if(cache[cachekey]) return cache[cachekey];
//         const val = fn.call(this, arguments);
//         cache[cachekey] =val;
//         return val;
//     }
        
// }

// const fib = memo(function(n) {
//     if(n < 2) return 1
//     return fib(n-2) + fib(n-1)
// })

// console.log(fib(11))

const square = (x) => {
    return x * x;
  };
  
  const cube = (x) => {
    return x * x * x;
  };
  
  const pow = (x) => {
    return Math.pow(2, x);
  };
  
  const sqArr = (arr) => arr.map((x) => x * x);
  const cArr = (arr1) => {
    return arr1.map((x) => x * x * x);
  };
  
  const sArr = (arr) => {
    return arr.map((p) => p * p);
  };
  
  function compose(...args) {
    const funcs = args;
    console.log('funcs', funcs);
    return function () {
      let fnArgs = [...arguments];
      console.log('funcs', fnArgs);
      funcs.forEach((fn, index) => {
        fnArgs = fn.apply(this, index > 0 ? [[...fnArgs]] : fnArgs);      
      });
      return fnArgs;
    };
  }
  
//   const comp = compose(add, square, cube, pow);
  
  const comp = compose(sArr, cArr);
  const result = comp([1, 2]);
  console.log('result', result);





class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

function reverseLinklist() {

  this.printAll = function(node){
    let current = node;
    while(current != null) {
      console.log("data", current.data);
      current = current.next
    }
  }

  this.reverse = function(node) {
    let current = node;
    let prev = null;
    
    while(current != null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    console.log(prev);
  }
}

const a = new Node("A")
const b = new Node("B")
const c = new Node("C")
a.next = b;
b.next = c;

const p = new reverseLinklist()
// p.printAll(a);

p.reverse(a);

// P -> null
// A B C
// C N 


const tree = {
  a: ['b','c'],
  b: ['d','e'],
  c:['f']
};

a.left = 'b';
a.right = 'c'
b.left = 'd';
b.right = 'e';
c.right = 'f';

if(root === null) return null 
const queue = ['a'];
let values = [];

while(queue.length) {
  const node = queue.shift();
  values.push(node);

  if(node.left !== null) {queue.push(current.left);}
  if(node.right !== null) {queue.push(current.right);}
}

function treeIncludes(root, target) {
  if(root === null) return false;
  if(root === target) return true;
  return treeIncludes(root.left, target) || treeIncludes(root.right, target)
}


function sumTree(root) {
  if(root === null) return 0; 
  return root.val + treeIncludes(root.left) + treeIncludes(root.right)
}

function minNodeTree(root) {
  if(root === null) return Infinity; 
  return Math.min(...[root.val, minNodeTree(root.left), minNodeTree(root.right)])
}

function maxNodeTree(root) {
  if(root === null) return -Infinity; 
  return Math.max(...[root.val, maxNodeTree(root.left), maxNodeTree(root.right)])
}


function maxPathLeafNode(root) {
  if(root === null) return -Infinity;
  if(root.left === null && root.right === null) return root.val;
  return root.val + Math.max(maxPathLeafNode(root.left), maxPathLeafNode(root.right))
}