class LinkedListNode {
  value: any;
  next: null | LinkedListNode;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

const a = new LinkedListNode('A');
const b = new LinkedListNode('B');
const c = new LinkedListNode('C');

a.next = b;
b.next = c;

deleteNode(b);
console.log(a.next.value, 'C');

function deleteNode(nodeToDelete: LinkedListNode): void {
  // Let's just make this node equal to the follower. Then, no lookups, involved, constant time!
  nodeToDelete.value = nodeToDelete.next ? nodeToDelete.next.value : null;
  nodeToDelete.next = nodeToDelete.next ? nodeToDelete.next.next : null;
}

export {};
