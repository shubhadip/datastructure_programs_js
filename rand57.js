const t = []

const rand5 = () => {
  return Math.floor((Math.random(0,5))*5) + 1
};

const first  = (rand5())
const second  = (rand5())
const third  = (rand5())

t.push(first % 2)
t.push(second % 2)
t.push(third % 2)

let finalNumber = 0;

t.forEach((elem,index) => {
  finalNumber += (elem * Math.pow(2, index))
});

console.log(t);
console.log(finalNumber);