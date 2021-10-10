
const t = "aaa"
let ans = 0;

let i = -1;
let j = -1;
const hash = {}

while(true){
  let f1 = false;
  let f2 = false;

  while(i < t.length-1){
    f1 = true
    i++;
    hash[t[i]] = hash[t[i]] ? hash[t[i]] + 1 : 1
    if(hash[t[i]] === 2 ){
      break;
    }else{
      const len = i-j;
      if(len > ans){
        ans = len
      }
    }
  }

  while(j < i){
    f2 = true
    j++;
    hash[t[j]] = hash[t[j]] - 1;
    if(hash[t[j]] == 1) {
      break;
    }
  }

  if(!f1 && !f2){
    break;
  }
}

console.log(ans)