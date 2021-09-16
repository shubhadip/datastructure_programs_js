let arrayV = [98,546,587,548,6,9];

function sortArray(arr){
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < ( arr.length - i -1 ); j++){
      let doSwap = false;
      if(Number(arr[j].toString()[0]) > Number(arr[j+1].toString()[0])){
        doSwap = true;
      }else if (Number(arr[j].toString()[0]) === Number(arr[j+1].toString()[0]) 
        && Number(arr[j].toString()[1]) > Number(arr[j+1].toString()[1])){
        doSwap = true;
      }else if(Number(arr[j].toString()[0]) === Number(arr[j+1].toString()[0]) 
        && Number(arr[j].toString()[1]) === Number(arr[j+1].toString()[1]) 
        && Number(arr[j].toString()[2]) === Number(arr[j+1].toString()[2])){
        doSwap = true;
      }
      if(doSwap){      
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+1] = temp
      }
    }
  }
  // Print the sorted array
  console.log(arr.reverse().join(''));
 }
   
 sortArray(arrayV);