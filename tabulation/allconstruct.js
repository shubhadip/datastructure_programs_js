const allconstruct = (targetsum ,wordBank) => {
  const table = Array(targetsum.length + 1).fill().map(() => []);
  table[0] = [[]];

  for(let i = 0; i <= targetsum.length ; i++){
    for(let word of wordBank) {
      if( targetsum.slice(i,i+word.length) === word){
        const newComb = table[i].map((subarray) => {
          return [...subarray, word]
        });
        table[i + word.length].push(...newComb)
      }
    }
  }
  
  return table[targetsum.length]
};

console.log(allconstruct('abcdef',['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(allconstruct('purple',["purp","p","ur","le","purpl"],{}))

// 0(m*m*n);
// 0(m)