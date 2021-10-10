// create array of targetSum
const bestsum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for(let i = 0; i<= targetSum ; i++) {
    if(table[i] != null) {
      for(let num of numbers) {
        const temp = [...table[i], num]
        if(!table[i + num] || table[i + num].length > temp.length){
          table[i + num] = temp
        }
      }
    }
  }
  return table[targetSum]
};

console.log(bestsum(8, [2,3,5]));
console.log(bestsum(100, [50,55,45]));

// m targetsum
// n length of array
// 0(m*m*n) time
// 0(m*m) space