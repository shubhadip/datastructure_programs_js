// add = (a,b) => a + b
// Sure = c => c*c

// function add (x,y) {
//   return x + y;
// };

// function square() {
//   return this.x * this.x
// };

// class AddSquare {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   add() {
//     this.x = this.x + this.y;
//     return this;
//   }

//   square() {
//     return this.x * this.x;
//   }
// }

// const p = new AddSquare(1, 2);
// console.log(p.add().square());

// compose(add, square, cube)(1,2 ...) = 9;

// return add.square.cube

// const add = (operands) => {
//   const op = Object.values(operands);
//   return op.reduce((acc, item) => acc + item, 0);
// };

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
  return function () {
    let fnArgs = [...arguments];
    funcs.forEach((fn, index) => {
      fnArgs = fn.apply(this, index > 0 ? [[...fnArgs]] : fnArgs);      
    });
    return fnArgs;
  };
}

// // const comp = compose(add, square, cube, pow);

const comp = compose(sArr, cArr);
const result = comp([1, 2]);
console.log(result);

// Function abc(a) {return a}
// abc.apply(this, [1]) ==== abc(1)

// Write a program which returns employee count for a given input.
// Employee are identified from their ids.
// Ids can be non unique across organisation.
// Eg.Input:
//    [{id:1, company: "Tekion"},
//   {id:2, company: "Google"},
//   {id:1, company: "Amazon"},
//   {id:1, company:"Tekion"},
//   {id:2, company:"Amazon"},
//   {id:2, company: "Tekion"}]
//Output : {Tekion: 2, Google: 1, Amazon: 2}

const ip = [
  { id: 1, company: "Tekion" },
  { id: 2, company: "Google" },
  { id: 1, company: "Amazon" },
  { id: 1, company: "Tekion" },
  { id: 2, company: "Amazon" },
  { id: 2, company: "Tekion" }
];

const hashMap = {};

// // iterate add unique company
// // increment count, add map of ids

ip.forEach((item) => {
  if (!hashMap[item.company]) {
    hashMap[item.company] = [item.id];
  } else {
    if (hashMap[item.company].indexOf(item.id) === -1) {
      hashMap[item.company].push(item.id);
    }
  }
});

const op = {};
Object.keys(hashMap).forEach((data) => {
  op[data] = hashMap[data].length;
});

// console.log(op);

// 1. call function repeateadly
// 2. with certain timeout
// 3. clear timeout


const repeat = (function(){
  let setId;
  return  {
    start: function(fn, time){
      setId = setTimeout(() => {
        fn.call(this);
        repeat.start(fn, time);
      }, time);
      console.log(setId);
    },
    clear: function(){
      clearTimeout(setId)
    }
  }
})();

let setId;
// const repeat = (fn, time) => {
//   setId = setTimeout(() => {
//     fn.call(this);
//     repeat(fn, time);
//   }, time);
//   console.log(setId);
// };

function customSetInterval(fn, time) {
  repeat.start(fn, time);
}

customSetInterval(() => {
  console.log("called");
}, 5000);

setTimeout(() => {
  console.log("cancelled", setId);
  clearTimeout(setId);
}, 15000);
