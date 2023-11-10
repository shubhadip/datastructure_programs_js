// take all 
// insert first in all possible positions
//                     [[]]
// a                    [a]
// b        [b,a]                  [a,b]
// c  [b,c,a] [b,a,c] [c,b,a]      [c,a,b]   [a,c,b]  [a,b,c]
 

const perm = function(elements){
  if(elements.length === 0) return [[]];
  
  const firstElement = elements[0];
  const rest = elements.slice(1);
  const rem = perm(rest);
  const allPerms = [];
  
  rem.forEach((elem) => {
    for(let i = 0; i<= elem.length; i++){
      // before i
      // i
      // after i
      const permWithFirst = [...elem.slice(0,i),firstElement, ...elem.slice(i)]
      allPerms.push(permWithFirst);
    }
  })
  return allPerms;
};


console.log(perm(['a','b']));



// perm([first, rest])
// perm([rest, first])