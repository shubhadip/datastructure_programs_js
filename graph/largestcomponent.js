const graph = {
  '0': ['8','1','5'],
  '1': ['0'],
  '5': ['0','8'],
  '8': ['0','5'],
  '2': ['3','4'],
  '3': ['2','4'],
  '4': ['3','2'],
}

const explore = (graph, source, visited) => {
  if(visited.has(source)) return 0;
  
  let size = 1;
  visited.add(source);
  for (const n of graph[source]) {
      size += explore(graph, n, visited)
  }

  return size;
};

const largestCompo = (graph) => {
  let longest = 0
  for (const node in graph) {
    const size = explore(graph, node, new Set());
    if(size > longest) longest = size
  };
  return longest
};


console.log(largestCompo(graph));