const merge =  (left, right) => {
  const arr = [];
  while(left.length && right.length) {
    if(left[0] < right[0]){
      arr.push(left.shift())
    }else if(left[0] > right[0]) {
      arr.push(right.shift())
    }
  };
  return [...arr,...left, ...right];
}

const mergeSort = (arr) => {
  if(arr.length <= 1) return arr;
  const pivotIndex = arr.length/2
  const left = arr.splice(0, pivotIndex);
  return merge(mergeSort(left), mergeSort(arr));
}

console.log(mergeSort([10,1,20,2,30,3,89,90,9,5]));