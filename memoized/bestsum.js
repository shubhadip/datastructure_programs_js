const bestSum = (targetSum, numbers, memo ={}) => {
  if (targetSum in memo) return memo[targetSum];

  if(targetSum === 0) return [];
  if(targetSum < 0) return null;

  let shortcomb = null;
  for(let n of numbers) {
    const rem = targetSum - n;
    const resp = bestSum(rem, numbers, memo);
    if(resp != null) {
      const comb = [ ...resp, n];
      // if comb is shortest
      if( shortcomb === null || comb.length < shortcomb.length ){
        shortcomb = comb
      }
    }
  };
  memo[targetSum] = shortcomb;
  return shortcomb
};
console.log(bestSum(15, [3,4,7,5,8]));
// console.log(bestSum(7, [2,3,4]));
// console.log(bestSum(7, [5,3,4,7]));
// console.log(bestSum(7, [2,4]));
// console.log(bestSum(8, [1,4,5]));
// console.log(bestSum(300, [7,14]));


// bruteforce
// m = target sum
// n no of elems
// 0(n^m * m) branchingfactor to height
// 0(m * m)

// memoize
// 0(m * n * m)
// 0(m * m)