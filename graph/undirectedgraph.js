const edges = [
  ['i','j'],
  ['k','i'],
  ['m','k'],
  ['k','l'],
  ['o','n'],
];

const buildGraph = (edges) => {
  const p ={};
  for (const edge of edges) {
    const [a,b] = edge;
    if(!(a in p)) p[a] = []
    if(!(b in p)) p[b] = []
    p[a].push(b)
    p[b].push(a)
  }
  return p;
}

const hasPath = (graph, src, dest, visited) => {
  
  if(src === dest) return true;
  if(visited.has(src)) return false;
  visited.add(src)
  const neigh = graph[src]
  for (const n of neigh) {
    if(hasPath(graph, n, dest, visited)){
      return true
    }
  }
  return false
}

const und = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)
  return hasPath(graph, nodeA, nodeB, new Set())
};

console.log(und(edges, 'j','m'))