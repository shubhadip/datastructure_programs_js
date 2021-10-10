const howSum = (targetSum, numbers, memo = {}) => {
  if(targetSum in memo) return memo[targetSum];
  
  if(targetSum === 0) return [];
  if(targetSum <= 0) return null;


  for(let n of numbers) { 
    const remainer = targetSum-n;
    const s = howSum(remainer, numbers, memo);
    if(s !=null) {
      memo[targetSum] = [...s, n];
      return [...s, n]
    }
  };
  memo[targetSum] = null;
  return null
};

console.log(howSum(7, [2,3]));
console.log(howSum(7, [5,3,4,7]));
console.log(howSum(7, [2,4]));
console.log(howSum(8, [2,3,5]));
console.log(howSum(300, [50,25]));

//m = targetSum
//n = array length
// bruteforce
// 0(n^m * m)
// space 0(m)

// memo
// 0(n * m * m)
// space 0(m*m)