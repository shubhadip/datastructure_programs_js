const countConstruct = (targetString, workBank, memo = {}) => {
  if( targetString in memo ) return memo[targetString]
  if(targetString === '') return 1;
  
  let count = 0;

  for(let word of workBank) {
    if(targetString.indexOf(word) === 0){
      const suff = targetString.slice(word.length);
      if(countConstruct(suff, workBank, memo)){
        count++;
      }
    }
  };
  memo[targetString] = count
  return count
};

console.log(countConstruct('purple',["purp","p","ur","le","purpl"],{}))
console.log(countConstruct('abcdef',["ab","abc","cd","abcd","def"],{}))
console.log(countConstruct('enterapotentport',['a','p','ent','enter','ot','o','p'],{}))