// create array of targetSum
const cansum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;

  for(let i = 0; i<= targetSum ; i++) {
    if(table[i] === true) {
      for(let num of numbers) {
        // if(table[i + num] != undefined){
          table[i + num] = true
        // }
      }
    }
  }
  return table[targetSum]
};

console.log(cansum(7, [5,3,4,7]));

// m targetsum
// n length of array
// 0(mn) time
// 0(m) space