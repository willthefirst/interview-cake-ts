class LinkedListNode {
  value: any;
  next: null | LinkedListNode;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

function kthToLastNode(k: number, head: LinkedListNode) {
  // Return the kth to last node in the linked list
  let currNode: null | LinkedListNode = head;
  const possibleKthNodes: LinkedListNode[] = new Array(k).fill(null);

  while (currNode) {
    possibleKthNodes.shift();
    possibleKthNodes.push(currNode);
    currNode = currNode.next;
  }

  return possibleKthNodes[0];
}

export {};
