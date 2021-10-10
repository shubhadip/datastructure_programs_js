const countConstruct = (targetsum ,wordBank) => {
  const table = Array(targetsum.length + 1).fill(0);
  table[0] = 1;

  for(let i = 0; i <= targetsum.length ; i++){
    if(table[i] >= 0){
      for(let word of wordBank) {
        if( targetsum.slice(i,i+word.length) === word){
          table[i + word.length] += table[i]
        }
      }
    } 
  }
  
  return table[targetsum.length]
};

console.log(countConstruct('abcdef',['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(countConstruct('purple',["purp","p","ur","le","purpl"]))


// 0(m*m*n);
// 0(m)