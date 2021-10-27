
const breadthFirstTraversal = (graph, source) => {
  let queue = [source];

  while(queue.length > 0) {
    const val = queue.shift();
    console.log(val);
    for (const iterator of graph[val]) {
      queue.push(iterator)
    }
  }
}

const graph = {
  a:['c','b'],
  b:['d'],
  c:['e'],
  d:['f'],
  e:[],
  f:[]
}

breadthFirstTraversal(graph, 'a')