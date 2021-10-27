const cpGraph = {
  '0': ['8','1','5'],
  '1': ['0'],
  '5': ['0', '8'],
  '8': ['0', '5'],
  '2': ['3','4'],
  '3': ['2','4'],
  '4': ['3','2'],
};


const explore = (graph, curr) => {
  if(visited.has(curr)) return false;

  visited.add(curr);
  for (const neigh of graph[curr]) {
    explore(graph, neigh, visited);
  };
  
  return true
};


const connectedGraph = (graph) => {
  let count = 0;
  for( let node of graph) {
    if(explore(graph, node, new Set())){
     count++;
    }
  }
  return count
};

