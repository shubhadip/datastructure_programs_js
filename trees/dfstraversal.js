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

//     a
//   b   c
// d   e   f

const dfs = function(rootNode){
  const stack = [rootNode];
  
  while(stack.length > 0) {
    // pop & push
    const current = stack.pop();
    console.log(current.data);
    if(current.right != null) stack.push(current.right);
    if(current.left != null) stack.push(current.left);
  };
  
};

dfs(a);

 // time complexity 0(n)
 // space complexity 0(n)


// ******* with recursion **********

console.log('Recursion');

const dfsrecursion = function(rootNode){
  if(rootNode === null) return;
  
  //pre-order
  console.log(rootNode.data);
  dfsrecursion(rootNode.left);
  dfsrecursion(rootNode.right);
  
  /* //in-order
  dfsrecursion(rootNode.left);
  console.log(rootNode.data);
  dfsrecursion(rootNode.right); */
  
  /* post-order
  dfsrecursion(rootNode.left);
  dfsrecursion(rootNode.right);
  console.log(rootNode.data); */
  
};

dfsrecursion(a)

const sumTree = (root) => {
  if(root === null) return 0;
  return sumTree(root.left) + root.data + sumTree(root.right);
}

console.log('*************** print outer *************');

const a1 = new Node(15);
const b1 = new Node(5);
const c1 = new Node(20);
const d1 = new Node(1);
const e1 = new Node(7);
const f1 = new Node(25);

a1.left = b1;
a1.right = c1;
c1.right = f1;
b1.right = e1;
b1.left = d1;

//     15
//   5   20

// 1  7     25 
const rootNode = a1;

const printouter = function(tempRootNode){
  if(tempRootNode === null) return null;
  console.log(tempRootNode.data)
  if(tempRootNode.data < rootNode.data || rootNode.data === tempRootNode.data){
    printouter(tempRootNode.left)
  }
  if(tempRootNode.data > rootNode.data || rootNode.data === tempRootNode.data){
    printouter(tempRootNode.right)
  }
}

printouter(rootNode);