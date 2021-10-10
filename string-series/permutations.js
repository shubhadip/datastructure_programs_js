// take all 
// insert first in all possible positions
//                     [[]]
// a                    [a]
// b        [b,a]                  [a,b]
// c  [c,b,a] [b,c,a] [b,a,c]      [c,a,b]   [a,c,b]  [a,b,c]
 

const perm = function(elements){
  if(elements.length === 0) return [[]];

  const firstElement = elements[0];
  const rest = elements.slice(1);
  const permsWithoutFirst = perm(rest);
  const allPerms = [];
  permsWithoutFirst.forEach((elem) => {
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


console.log(perm(['a','b','c']));



// perm([first, rest])
// perm([rest, first])