const reverseArrayjs = (p) => {
  let t = '';
  for(let i = p.length-1 ; i>=0 ;i--){
    t += p[i]
  }
  return t;
};

console.log(reverseArrayjs('asdf'))