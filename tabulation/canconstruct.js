const canconstruct = (targetsum ,wordBank) => {
  const table = Array(targetsum.length + 1).fill(false);
  table[0] = true;

  for(let i = 0; i <= targetsum.length ; i++){
    if(table[i] === true){
      for(let word of wordBank) {
        if( targetsum.slice(i,i+word.length) === word){
          table[i + word.length] = true
        }
      }
    } 
  }
  
  return table[targetsum.length]
};

console.log(canconstruct('abcdef',['ab', 'abc', 'cd', 'def', 'abcd']));

// 0(m*m*n);
// 0(m)