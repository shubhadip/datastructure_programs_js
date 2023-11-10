const s1 = 'ad';
const s2 = '12';
const sum = '1ad2';

function whileLogic() {

  if(s1.length + s2.length != sum.length){
    console.log(false);
    return false
  }
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
    return false
  }
  return true



}


let isValid = false;
function iterativeLogic() {
  for(let n = 0; n<sum.length; n++) {
    const firstchar = sum[n+0]
    const secondchar = sum[n+1]
    const ab = `${firstchar},${secondchar}`;
    const matchChar = [`${s1[n]},${s2[n]}`, `${s2[n]},${s1[n]}`]
    if(matchChar.includes(ab)) {
      isValid = true
    }
    n = n + 1;
  }
  return isValid
}
console.log(iterativeLogic());