/********** globalThis **********/

console.log(globalThis);

/********** Promise.allSettled **********/

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

Promise.allSettled([p1, p2, p3]).then((data) => {
  console.log(data);
});

Promise.all([p1, p2, p3])
.then((data) => {
  console.log(data);
})
.catch((e)=>{
  console.log('rejected promise all --->', e)
})

Promise.race([p1,p3])
.then((data) => {
  console.log('race', data);
})

/********** Nullish coalescing (??) **********/
// print right only when null or undefined in left 

let x = {
  profile: {
    name: '',
    age: 23
  }
};

console.log('nullish', x.profile.name ?? 'john')


/********** Optional Chaining (?.) **********/

let y = { };
console.log('Optional Chaining', y?.profile?.name )



/********** BigInt **********/

const max = Number.MAX_SAFE_INTEGER
console.log('Big Int', max )

const bigOne = 1n
console.log('Big Int', bigOne + 2n )
