// directed graph
const graph = {
  '1': ['2'],
  '2': ['3'],
  '3': ['1'],
}


// const graph = {
//   '0': ['8','1','5'],
//   '1': ['0'],
//   '5': ['0', '8'],
//   '8': ['0', '5'],
//   '2': ['3','4'],
//   '3': ['2','4'],
//   '4': ['3','2'],
// };


const explore = (graph, curr, visited, stack) => {

  if(visited.has(curr)) {
    return false
  }
  
  stack.push(curr)
  visited.add(curr);
  
  for(let neigh of graph[curr]) {
    explore(graph, neigh, visited, stack)
    if(stack.indexOf(neigh) > -1){
      return -1
    }
  }

  stack.pop();
  return true
};

const cycleDetection = (graph) => {
  const visited = new Set();
  for (const node in graph) {
    const res = explore(graph, node, visited, []);    
    if(res === -1) {
      console.log('loop detected')
      return -1
    }
  }
  
};

console.log(cycleDetection(graph))