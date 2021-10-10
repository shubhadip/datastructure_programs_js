let str = 'abc';


function f(t, i, n, accStr){
  if(i == n) {
    console.log(t);
  }else{  
    f(t,i+1,n, accStr);
    t= t+accStr[i];
    f(t,i+1,n, accStr);
  }
}

f('',0,str.length, str);




// function fn(t, i, n, ss){
//   if(i == n){
//     consolg.log(t);
//   }else{
//     fn(t,i+1, n, ss);
//     t= t+ss[i]
//     fn(t,i+1, n, ss);
//   }
// }