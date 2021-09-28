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




Array.prototype.myReduce = function(fn, intialValue){
  const dataArray = this;
  dataArray.forEach((item) => {
    intialValue = intialValue != undefined ? fn(intialValue, item) : item;
  })
  return intialValue;
};

console.log('reduce',[[1],[2],[3]].myReduce((a,b) => a.concat(b)),[])

Array.prototype.myMap = function(fn, initialValue = []) {
  console.log(this.valueOf());
  const dataArray = this;
  dataArray.forEach((item) => {
    initialValue.push(fn(item));
  })
  return initialValue
}

console.log('map',[1,2,3].myMap((a) => a*2))


const debounce =  (fn, time) => {
  let isTimeout;
  return function(){
    clearTimeout(isTimeout);
    isTimeout = setTimeout(()=>{
      fn.call(this,arguments);
    },time)
  }
};

debounce(()=>console.log('asd'), 1000)('asd')
debounce((d)=> () => console.log(d), 2000)('asd1')


