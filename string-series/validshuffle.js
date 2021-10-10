const s1 = 'ad';
const s2 = '12';
const sum = '1a2d';

if(s1.length + s2.length != sum.length){
  console.log(false);
  return
}else{
  let i = 0;
  let j = 0;
  let k = 0;

  while(k < sum.length){
    if(i < s1.length && sum[k] == s1[i]) {
      i++
    }else if(j < s2.length && sum[k] == s2[j]){
      j++
    }else{
      break
    }
    k++;
  }
  if(i < s1.length || j < s2.length){
    console.log(false)
    return 
  }
  console.log(true)
}