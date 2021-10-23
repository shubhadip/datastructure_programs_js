// either or logic 
// either you take input or not
//                     []
// a        []                     [a]
// b    []        [b]          [a]          [a,b]
// c []   [c]  [b]   [b,c]  [a]   [a,c]   [a,b]    [a,b,c]

const comb = (elements) => {
  if(elements.length === 0 ) return [[]];
  const firstEl = elements[0];
  const res = elements.slice(1)
  const combsWithoutFirst = comb(res);
  const combsWithFirst = [];
  
  combsWithoutFirst.forEach((item) => {
    // push first element in others
    const combWithFirst = [...item, firstEl];
    combsWithFirst.push(combWithFirst);
  });
  
  return [
    ...combsWithFirst, ...combsWithoutFirst
  ]
};

console.log(comb(['1','2','3']));
console.log(comb(['2','3']));
console.log(comb(['3']));


// time 0(2^n)
// time 0(n * n)