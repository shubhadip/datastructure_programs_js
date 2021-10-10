// create array of targetSum
const howsum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for(let i = 0; i<= targetSum ; i++) {
    if(table[i] != null) {
      for(let num of numbers) {
        table[i + num] = [...table[i], num]
      }
    }
  }
  return table[targetSum]
};

console.log(howsum(7, [5,3,4,7]));

// m targetsum
// n length of array
// 0(m*m*n) time
// 0(m*m) space