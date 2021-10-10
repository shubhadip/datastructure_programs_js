const canCosnt = (targetString, wordBank, memo = {}) => {
  if( targetString in memo) return memo[targetString]
  if(targetString === '') return true;
  
  for(let word of wordBank) {
    if(targetString.indexOf(word) === 0){
      const suff = targetString.slice(word.length)
      if(canCosnt(suff, wordBank)) {
        memo[targetString] = true
        return true;
      }
    }
  };
  memo[targetString] = false;
  return false
};


console.log(canCosnt('abcdef',["ab","abc","cd","abcd","def"],{}))
console.log(canCosnt('skateboard',["bo","rd","ate","t","ska","sk", "boar"],{}))
console.log(canCosnt('enterapotentport',['a','p','ent','enter','ot','o','p'],{}))
// console.log(canCosnt('',[],{}))
// console.log(canCosnt('',[],{}))


//m = target length
//m = wordbank length
// 0(n^m * m) branching factor to length power
// 0(m * m)

// memomise
// 0(n*m2) branching factor to length power