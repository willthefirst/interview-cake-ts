class LinkedListNode {
  value: any;
  next: null | LinkedListNode;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

function reverse(headOfList: LinkedListNode) {
  // Reverse the linked list in place
  // 0,1,2

  // 0

  let currNode: LinkedListNode | null = headOfList;
  let prevNode: LinkedListNode | null = null;
  let nextNode: LinkedListNode | null;

  while (currNode) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }

  return headOfList;
}
