const arr1 = [1, [2], [3, [[4]]],[5,6]] 
// console.log(arr1.flatten()); // [1, 2, 3, 4, 5, 6] 




const flatten = (data) => {
  let op =  [];
  data.forEach(element => {
    if(Array.isArray(element)) {
      op = [...op, ...flatten(element)]
    }else{
      op.push(element)
    }
  });
  return op
}

