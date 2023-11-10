let graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: [],
    e: ['b'],
    f: ['d']
}

const printAllNodes = (graph, source) => {
    const stack = [source];

    while(stack.length > 0) {
        const val = stack.pop();
        console.log(val);
        const relatedNodes = graph[val];
        for(node of relatedNodes) {
            stack.push(node);
        }
    }
}
printAllNodes(graph,'a');

graph = {
    f: ['g','i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: [],
}

function hasPath(g,s,d) {
    if(s === d) return true;
    for(n of graph[src]) {
        const s = hasPath(g,n,d);
        if(s) {
            return true
        }
    }
    return false;
}

hasPath(graph, source, dest)



graph = {
    i: ['j','k'],
    j: ['i'],
    k: ['i','m', 'l'],
    m: ['k'],
    l: ['k'],
    o: ['n'],
    n: ['o']
}


function hasPathCycle(graph,s,d, visited) {
    if(visited[s]) return false;
    if(s === d) return true

    visited.add(s);
    
    const values = graph[s];
    for(v of values) {
        if(hasPathCycle(graph, v, d, visited)) {
            return true;
        }
    }

    return false;

}

hasPathCycle(graph, 'i','l', new Set([]))




function connectedPaths(graph, n, d, visited) {
    if(visited[s]) return false;

    visited.add(s)

    for(n of graph[s]) {
        connectedPaths(graph, n, d, visited);
    }
    return true
}


function hasCycle(graph, s, d) {
    visited = new Set();
    let count = 0;
    for(n of graph[s]) {
        if(connectedPaths(graph, n, d, visited) === true) {
            count++
        }
    }
    return count;

}
 graph = {
    '0': ['8','1','5'],
    '1': ['0'],
    '5': ['0','8'],
    '8': ['0','5'],
    '2': ['3','4'],
    '3': ['2','4'],
    '4': ['3','2'],
  }


  function lexplore(g,s,v) {
    if(v[s]) return 0;
    let size = 1;
    
    v.add(s);
    for(n of g[s]) {
        size += lexplore(g, n, visited);
    }
    return size;

  };

   function largestComponent(g,s) {
    visited = new Set();
    let size = -Infinity;
    for(n of g[s]) {
        let val = lexplore(g,s,d,v)
        if(val > size) {
            size = val;
        }
    }
    return size
  };

  largestComponent(graph,s);