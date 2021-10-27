const depthFirstSearch = (graph, source) => {
  let stack = [source];

  while(stack.length > 0) {
    const curr = stack.pop();
    console.log(curr);
    stack = [...stack, ...graph[curr]]
  }

};


const depthFirstSearchRecursion = (graph, source) => {
  console.log(source);
  for (const iterator of graph[source]) {
    depthFirstSearchRecursion(graph, iterator)
  }
};

const graph = {
  a:['c','b'],
  b:['d'],
  c:['e'],
  d:['f'],
  e:[],
  f:[]
}

depthFirstSearch(graph, 'a')
depthFirstSearchRecursion(graph, 'a')