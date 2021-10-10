function qs(arr){
  if(arr.length <=1) return arr;

  const pivot = arr[arr.length-1]

  const left = [];
  const right = [];
  for(i = 0;i < arr.length ; i++){
    if(arr[i] < pivot){
      left.push(arr[i])
    }else if(arr[i] > pivot){
      right.push(arr[i])
    }
  }

  return [
    ...qs(left),
    pivot,
    ...qs(right)
  ]
}
console.log(qs([11,100,1000,88,90,1,30,45,10,15]))