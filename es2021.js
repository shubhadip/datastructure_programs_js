/********** Replace All **********/

const str = 'only two months to end 2021, good bye 2021, welcome 2022';
// console.log(str.replaceAll('2021', '2022'));

/********** Promise.any **********/
// wait for all abort on first success;

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('asdad')
  },200)
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('rejected')
  },300)
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolve 4000')
  },4000)
});

Promise.any([p1,p2,p3])
  .then((data) => console.log(data))
  .catch((e) => console.log(e));


/********** Logical Assignment **********/

// a ||= b
// a &&= b
// a ??= b

const add  = (a,b) => {
  
  a = a || 0;
  b ||= 0;

  return a + b; 
};

console.log(add(" "," "));


/********** Numerical Separator **********/

const num = 1_000;
console.log(num);

const num1 = 1_000_000;
console.log(num1);