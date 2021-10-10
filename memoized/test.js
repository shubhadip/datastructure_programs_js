// const cansum = (targetSum, numbers, memo = {}) => {
//   if(targetSum in memo) return memo[targetSum];
//   if(targetSum === 0) return true
//   if(targetSum < 0) return false

//   for(let num of numbers){
//     if( cansum(targetSum-num, numbers, memo)) {
//       memo[targetSum] = true;
//       return true
//     }
//   };
  
//   memo[targetSum] = false;
//   return false
// }
