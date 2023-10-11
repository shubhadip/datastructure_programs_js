class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);

a.next = b;
b.next = c;
c.next = d;
d.next = null;

const x = new Node(9);
const y = new Node(8);
const z = new Node(7);

x.next = y;
y.next = z;
z.next = null;

const printLinklist = (node) => {
  let current = node;
  while (current != null) {
    console.log(`${current.val} ==> ${current.next?.val}`);
    current = current.next;
  }
};

const printLinklistRec = (node) => {
  console.log(`${node.val} ==> ${node.next?.val}`);
  printLinklistRec(node.next);
};

// printLinklist(a);

function fillValues(node) {
  if (node !== null) {
    return [node.val, ...fillValues(node.next)];
  }
  return [];
}

const printLinklistValuesRec = (node) => {
  return [node.val, ...fillValues(node.next)];
};

// console.log("linklist values", printLinklistValuesRec(a));

function sumValues(current) {
  if (current !== null) {
    return (current.val += sumValues(current.next));
  }
  return 0;
}

function sumValuesOfLinkedListRec(node) {
  let current = node;
  return current.val + sumValues(current.next);
}

function sumValuesOfLinkedList(node) {
  let current = node;
  let sum = 0;
  while (current != null) {
    sum += current.val;
    current = current.next;
  }
  return sum;
}

// console.log("iterative Sum", sumValuesOfLinkedList(a));
// console.log("Recursive Sum", sumValuesOfLinkedListRec(a));

function findLinkListValue(node, val) {
  let current = node;
  let selectedNode = null;
  while (current !== null) {
    if (current.val === val) {
      selectedNode = current.val;
      break;
    }
    current = current.next;
  }
  return selectedNode;
}

function findNode(node, val) {
  if (node.val != val) {
    return findNode(node.next, val);
  }
  return node;
}
function findLinkListValueRec(node, val) {
  let current = node;
  console.log(findNode(current, val));
}

// console.log(findLinkListValue(a, 4));

// A => B =>  C => D
// N    C

function reverseLinkList(node) {
  let current = node;
  let prev = null;

  while (current != null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  console.log(prev);
}
// console.log(reverseLinkList(a));

function zipperListRec(head1, head2) {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = zipperListRec(next1, next2);
  return head1;
}

function zipperList(head1, head2) {
  let mergehead = head1;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;

  while (current1 != null || current2 != null) {
    if (count % 2 === 0) {
      mergehead.next = current2;
      current2 = current2.next;
    } else {
      mergehead.next = current1;
      current1 = current1.next;
    }
    mergehead = mergehead.next;
    count += 1;
  }

  if (current1 !== null) {
    mergehead.next = current1;
  }
  if (current2 !== null) {
    mergehead.next = current2;
  }
  return head1;
}

console.log(zipperList(a, x));
