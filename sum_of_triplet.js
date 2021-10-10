
const t= [1,2,4,5,6,8]
let psum = 15;

for(let i = 0 ; i < t.length-2 ; i++){
  for(let j = i+1 ; j < t.length-1 ; j++){
    for(let k = j+1 ; k < t.length ; k++){
      if(t[i] + t[j] + t[k] === psum){
        console.log(`${t[i]}, ${t[j]}, ${t[k]}`)
      }
    }
  } 
}