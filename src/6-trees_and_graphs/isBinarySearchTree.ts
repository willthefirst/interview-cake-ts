class BinaryTreeNode {
  value: number;
  left: BinaryTreeNode | null;
  right: BinaryTreeNode | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value: number) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value: number) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

interface NodeAndBoundsStack {
  node: BinaryTreeNode;
  lowerBound: number;
  upperBound: number;
}

function isBinarySearchTree(treeRoot: BinaryTreeNode): boolean {
  const nodeAndBoundsStack: NodeAndBoundsStack[] = [];
  nodeAndBoundsStack.push({
    node: treeRoot as BinaryTreeNode,
    lowerBound: Number.NEGATIVE_INFINITY,
    upperBound: Number.POSITIVE_INFINITY
  });

  // Depth first traversal
  while (nodeAndBoundsStack.length) {
    const nodeAndBounds = nodeAndBoundsStack.pop();
    if (nodeAndBounds === undefined) {
      break;
    }

    const { node, lowerBound, upperBound } = nodeAndBounds;

    if (node.value <= lowerBound || node.value >= upperBound) {
      return false;
    }

    if (node.left) {
      nodeAndBoundsStack.push({
        node: node.left,
        lowerBound: lowerBound,
        upperBound: node.value
      });
    }
    if (node.right) {
      nodeAndBoundsStack.push({
        node: node.right,
        lowerBound: node.value,
        upperBound: upperBound
      });
    }
  }
  return true;
}
// So that I don't get the TS duplicate error
export {};
