const flattenArray = (arr) => {
  if(!Array.isArray(arr)) return arr
  
  let op = [];

  for(let i = 0; i< arr.length; i++) {
    if(Array.isArray(arr)) {
      op = op.concat(flattenArray(arr[i]))
    }
  }
  return op;
}

console.log(flattenArray([1,[2, [3]]]));