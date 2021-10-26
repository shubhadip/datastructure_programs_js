const directionMap = {
  'up':[-1,0],
  'down':[1,0],
  'left':[0,1],
  'right':[0,-1],
}
class Snake {
  constructor(){
    this.snakeBody = [
      [4,0],
      [4,1],
      [4,2],
      [4,3],
      [4,4],
      [4,5],
    ];
  };

  draw() {
    const grid = Array(10).fill('').map(() => Array(10).fill('_'));
    this.snakeBody.forEach((item) => {
      const [row, col] = item;
      grid[row][col] = '*'
    });
    console.log(grid.map((item) => item.join('|')));
  }

  move(direction) {
    const tempValue = directionMap[direction];
    const head = this.snakeBody[this.snakeBody.length-1]
    const newValue  = [tempValue[0] + head[0], tempValue[1] + head[1]]
    this.snakeBody.push(newValue);
    this.snakeBody.shift();
    this.draw();
  };

};

const s = new Snake();
let direction = 'up';
s.draw();
s.move(direction)
direction = 'right';
s.move(direction)
direction = 'up';
s.move(direction)
direction = 'right';
s.move(direction)


// [{"a": 'a'}]

// const t = {
//   'a': 'a',
//   d: {
//     s: 'a',
//     f: [{f: 'f', m: true}]
//   }
// }