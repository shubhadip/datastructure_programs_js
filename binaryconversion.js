let num = 5;
const t = [];
while( num !== 0) {
  const quotient = num%2;
  num = parseInt(num / 2);
  t.push(quotient)
  console.log(t);
}