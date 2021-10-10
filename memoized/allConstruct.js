const allConstruct = (targetString, workBank, memo = {}) => {
  if(targetString in memo) return memo[targetString];
  if(targetString === '') return [[]];
  
  const result = [];
  
  for(let word of workBank) {
    if(targetString.indexOf(word) === 0){
      const suff = targetString.slice(word.length);
      const response = allConstruct(suff, workBank, memo);
      const targetWays = response.map((item) => [ word, ...item]);
      result.push(...targetWays)
    }
  };

  memo[targetString] = result;
  return result;
};

console.log(allConstruct('purple',["purp","p","ur","le","purpl"],{}))
console.log(allConstruct('abcdef',["ab","abc","cd","abcd","def"],{}))
console.log(allConstruct('enterapotentport',['a','p','ent','enter','ot','o','p'],{}))


// 0(n^m)
// 0(m)