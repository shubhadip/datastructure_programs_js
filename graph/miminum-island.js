const grid = [
  ['W','L','W','W','W'],
  ['W','L','W','W','W'],
  ['W','W','W','L','W'],
  ['L','W','L','L','W'],
  ['L','W','W','L','L'],
  ['L','L','W','W','W'],
];


const explore = (grid, r, c, visited) => {
  const rowinBounds = 0 <= r && r < grid.length;
  const colinBounds = 0 <= c && c < grid[0].length;
  
  if(!rowinBounds || !colinBounds) return 0
  if(grid[r][c] === 'W') return 0;
  
  const pos = `${r},${c}`;
  if(visited.has(pos)) return 0;
  visited.add(pos);
  let size = 1;
  size += explore(grid, r-1, c, visited);
  size += explore(grid, r+1, c, visited);
  size += explore(grid, r, c-1, visited);
  size += explore(grid, r, c+1, visited);
  
  return size;
};

const island = (grid) => {
  const visited = new Set();
  let minSize = Infinity;
  for (let r = 0; r < grid.length; r=r+1) {
    for (let c = 0; c < grid[0].length; c =c+1) {
      const size = explore(grid, r, c, visited)
      console.log(r +',' + c, size);
      if(size > 0 && size < minSize) {
        minSize = size
      }
    }
  }
  return minSize;
};

console.log(island(grid)) 