const arr = [2,2,2 ,3,3,3 , 5, 1,1];
const hashMap = {}

arr.forEach((elem) => {
  if(hashMap[elem]){
    hashMap[elem] += 1 
  }else{
    hashMap[elem] = 1
  }
});
console.log(hashMap)