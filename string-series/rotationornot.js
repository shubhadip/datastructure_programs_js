let s1 = 'ABACD'
let s2 = 'DCABA'

if(s1.length === s2.length) {
  if(s1.concat(s2).includes(s2)){
    console.log(true);
  }else{
    console.log(false)
  }  
}else{
  console.log(false)
}
