
const btree = '0100110101';

let x = 0;
let y = 0;

const len = btree.length;
let c = 0;
const arr = btree.split('');

for(let i = 0; i< len; i++) {
  if(arr[i] === '0'){
    x++
  }else{
    y++
  }
  if(x == y){
    c++
  }
}
if(x != y) console.log('novalues')
if(c){ console.log('asdasd',c)}