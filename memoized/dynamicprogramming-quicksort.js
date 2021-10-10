const quickSort = (arr) => {
  if(arr.length <=1) return arr;

  const pivot = arr[arr.length-1];
  const left = [];
  const right = []
  
  for(let i = 0; i < arr.length; i++) {
    if( arr[i] < pivot) {
      left.push(arr[i]);
    }else if(arr[i] > pivot){
      right.push(arr[i]);
    }
  };

  return [
    ...quickSort(left),
    pivot,
    ...quickSort(right)
  ]
};

console.log(quickSort([10,1,20,2,30,3,89,90,9,5]));