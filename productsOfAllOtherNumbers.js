const nums = [1,2,3,4];

let numbersBefore = 1;

const products = [];

for( let i = 0; i < nums.length; i++){
  products[i] = numbersBefore;
  numbersBefore = numbersBefore * nums[i]
};
// products = [1,1,2,6];
let numbersAfter = 1;
for( let k = nums.length -1; k > -1; k--){
  products[k] = numbersAfter * products[k];
  numbersAfter *= nums[k]
};
console.log(products);