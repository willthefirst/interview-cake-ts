import { notEqual } from 'assert';

class LinkedListNode {
  value: any;
  next: null | LinkedListNode;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

const containsCycle = (node: LinkedListNode): boolean => {
  const nodes: Array<null | LinkedListNode> = [node];
  const nodesVisited = new Set();

  while (nodes.length) {
    const currentNode = nodes.pop();

    // If the current node is undefined or null, we can't have looped.
    if (!currentNode) {
      return false;
    }

    if (nodesVisited.has(currentNode)) {
      return true;
    }

    nodesVisited.add(currentNode);
    nodes.push(currentNode.next);
  }

  return false;
};

const createNodesWithNextValues = (
  nextNodeVals: Array<number | null>
): LinkedListNode[] => {
  const nodes = nextNodeVals.map((nextNodeVal, index) => {
    return new LinkedListNode(index);
  });

  nodes.forEach((node, index) => {
    const nextNodeIndex = nextNodeVals[index];
    node.next = nextNodeIndex === null ? null : nodes[nextNodeIndex];
  });

  return nodes;
};

const noCycle = createNodesWithNextValues([1, 2, null]);
console.log(containsCycle(noCycle[0]) === false);

const hasCycle = createNodesWithNextValues([1, 2, 0]);
console.log(containsCycle(hasCycle[0]) === true);

const broken = createNodesWithNextValues([1]);
console.log(containsCycle(broken[0]) === false);

const empty = createNodesWithNextValues([]);
console.log(containsCycle(empty[0]) === false);

const singleLoop = createNodesWithNextValues([0]);
console.log(containsCycle(singleLoop[0]) === true);

export {};
