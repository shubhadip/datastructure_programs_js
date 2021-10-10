const coinChange = (sum, arr) => {
  if(sum === 0) return [[]]
  if(sum < 0) return null
  let result = [];
  
  for(let num of arr) {
    const remainder = coinChange(sum-num, arr)
    if(remainder != null ){
      const targetWays = remainder.map((item) => [ num, ...item]);
      result.push(...targetWays)
    }
  };
  return result
}


console.log(coinChange(15, [3,4,7,5,8]).length);
console.log(coinChange(4, [1,2,3]).length);