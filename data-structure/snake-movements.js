// -  queue for snake
// -  draw() queue for snake
// - move()  move method


class Snake {
  constructor(){
    this.snakeBody = [
      [4,1],
      [4,2],
      [4,3],
      [4,4],
    ]
  }

  draw(){
    const grid = [];
    for(let i =0; i < 10; i++) {
      const row = []
      for(let j=0; j < 10; j++) {
        row.push(' ')
      }
      grid.push(row)
    }
    this.snakeBody.forEach((pos) => {
      const [row, col] = pos;
      grid[row][col] = "*"
    });
    grid.forEach((row) => console.log(row.join(' | ')))
  }

  move(direction) {
    const delta = {
      up: [-1, 0],
      down: [+1, 0],
      right: [0, -1],
      left: [0, 1],
    };
    const currentHead = this.snakeBody[this.snakeBody.length-1];

    const [ currRow, currCol ] = currentHead;

    const [changeRow, changeCol] = delta[direction];

    const newHead = [currRow + changeRow, currCol + changeCol];
    this.snakeBody.push(newHead);
    this.snakeBody.shift();
  }
}

const g = new Snake();

console.log(g.draw());