class Pair {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  exec(fn){
    return fn.call(this, this.x, this.y)
  }

  map(fn){
    const tempx = fn.call(this, this.x);
    this.x = tempx;
    return this
  }
};

const p = new Pair(2,3);

p.exec(Math.pow)
// console.log('asd', p.map((x) => x).exec(Math.pow))
console.log('asd', p.map((x) => 3 * x + 1).exec(Math.pow))
// console.log('asd', p.map((x) => 3 * x + 1).map((x) => 3 * x + 1).exec(Math.pow))

