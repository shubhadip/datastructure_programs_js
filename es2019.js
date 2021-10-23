/********** flatten - flat **********/
const aFlat = [10,[20,30,[40, [60, [80]]]]]

console.log('default flatten', aFlat.flat());
console.log('complete flattening ', aFlat.flat(Infinity));


const aFlat1 = [10,20,30]

console.log('flat', aFlat1.map(x => x*x)); // [[100], [400], [900]]
console.log('complete flattening ', aFlat1.flatMap((x) => [x*x]));  // [100, 400, 900]


/********** trim start / end **********/

const data = '    jlkjlj   jlljllj   ';
console.log('trimEnd', JSON.stringify(data.trimEnd()));
console.log('trimStart', JSON.stringify(data.trimStart()));


/********** Object.fromEntries **********/

const obj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: true
};

let entries = Object.entries(obj);

console.log('fromEntries', Object.fromEntries(entries));

/********** Symbol Description **********/

const desc = 'my symbol';
const sym = Symbol(desc);

console.log('symbol desc', sym.description === desc)
