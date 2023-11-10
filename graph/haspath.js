
const graph = {
  f: ['g','i'],
  h:[],
  g:['h'],
  j:['i'],
  k:[],
  i:['g','k']
};

const dfsHasPath = (graph, src, dest) => {
  if(src === dest) return true;
  
  for (const neigh of graph[src]) {
    if(dfsHasPath(graph, neigh, dest)){
      return true
    }
  }

  return false;
};


const bfsHasPath = (graph, src, dest) => {
  const queue = [src]
  
  while(queue.length > 0) {
    const curr = queue.shift();
    if(curr === dest) return true
    for (const neigh of graph[curr]) {
      queue.push(neigh);
    }
  }

  return false;
};

console.log(dfsHasPath(graph, 'f','k'))
console.log(bfsHasPath(graph, 'f','k'))
