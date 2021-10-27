const edgeList = [
  ['w','x'],
  ['x','y'],
  ['z','y'],
  ['z','v'],
  ['w','v'],
];

const getGraph = (edgeList) => {
  const graph = {}
  for (const edge of edgeList) {
    const [a,b] = edge
    if(!(a in graph)) graph[a] = [];
    if(!(b in graph)) graph[b] = [];

    graph[a].push(b)
    graph[b].push(a)
  }
  return graph
};

const shortestPath = (graph, from, to) => {
  const queue = [[from, 0]];
  const visited = new Set(from);
  
  while(queue.length > 0) {
    const [node, dist] = queue.shift();

    if(node === to) {
      return dist
    };

    for (const iterator of graph[node]) {
      if(!visited.has(iterator)){
        queue.push([iterator, dist + 1])
        visited.add(iterator);
      }
    };

  }
  return -1
};

console.log(shortestPath(getGraph(edgeList), 'w','z')); // op = 2