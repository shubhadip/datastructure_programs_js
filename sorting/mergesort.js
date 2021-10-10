
function merge(left, right){
  let arr = []
  while(left.length && right.length){
    // zero as at the end we will have only one element to compare hence [0] from each section
    if(left[0] < right[0]){
      arr.push(left.shift())
    }else{
      arr.push(right.shift())
    }
  }
  return [...arr, ...left, ...right];
};

function mergesort(arr){
  if(arr.length <=1){
    return arr;
  }
  const opp = arr.length/2
  const left = arr.splice(0, opp);
  return merge(mergesort(left),mergesort(arr))
}
console.log(mergesort([1000, 500, 10,200,100,40]))