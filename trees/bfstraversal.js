function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
c.right = f;
b.right = e;
b.left = d;

const bfs = function(rootNode){
  const queue = [rootNode];
  
  while(queue.length > 0) {
    // shift & push
    const current = queue.shift();
    console.log(current.data);
    if(current.left != null) queue.push(current.left);
    if(current.right != null) queue.push(current.right);
  };
  
};

bfs(a);


const bffind = function(rootNode, targetNode){
  const queue = [rootNode];
  
  while(queue.length > 0) {
    // shift & push
    const current = queue.shift();
    if(current.data === targetNode) return true;
    if(current.left != null) queue.push(current.left);
    if(current.right != null) queue.push(current.right);
  };
  return false;
};

bffind(a, 'e');

    //     a
    //   b   c
    // d   e   f



const sumTree = function(rootNode, targetNode){
  const queue = [rootNode];
  let sum = 0;
  while(queue.length > 0) {
    const current = queue.shift();
    sum += current.data
    if(current.left != null) queue.push(current.left);
    if(current.right != null) queue.push(current.right);
  };
  return sum;
};

console.log(sumTree(a));


// time complexity 0(n)
// space complexity 0(n)