class BinaryTreeNode {
  value: number;
  left: null | BinaryTreeNode;
  right: null | BinaryTreeNode;

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

function isBalancedIterative(treeRoot: BinaryTreeNode): boolean {
  // Go down until leaf
  // mindepth = 0
  // max depth = max(currentMaxDepth, this depth)
  // if maxDepth > 1, return false;
  const nodesAndDepths: [BinaryTreeNode, number][] = [[treeRoot, 0]];

  let minDepth: number | null = Infinity;
  let maxDepth: number | null = -Infinity;

  while (nodesAndDepths.length) {
    // pop the last node off.
    const nodeAndDepth = nodesAndDepths.pop();

    if (nodeAndDepth) {
      const [node, depth] = nodeAndDepth;

      if (!node.left && !node.right) {
        // If it's a leaf, update minDepth and maxDepth
        if (depth < minDepth) {
          minDepth = depth;
        }

        if (depth > maxDepth) {
          maxDepth = depth;
        }
      } else {
        // Add children to the stack
        if (node.left !== null) {
          nodesAndDepths.push([node.left, depth + 1]);
        }
        if (node.right !== null) {
          nodesAndDepths.push([node.right, depth + 1]);
        }
      }

      if (maxDepth - minDepth > 1) {
        return false;
      }
    }
  }

  return true;
}

// Tests

let desc = 'full tree';
let treeRoot = new BinaryTreeNode(5);
let leftNode = treeRoot.insertLeft(8);
leftNode.insertLeft(1);
leftNode.insertRight(2);
let rightNode = treeRoot.insertRight(6);
rightNode.insertLeft(3);
rightNode.insertRight(4);
assertEquals(isBalancedIterative(treeRoot), true, desc);

desc = 'both leaves at the same depth';
treeRoot = new BinaryTreeNode(3);
leftNode = treeRoot.insertLeft(4);
leftNode.insertLeft(1);
rightNode = treeRoot.insertRight(6);
rightNode.insertRight(9);
assertEquals(isBalancedIterative(treeRoot), true, desc);

desc = 'leaf heights differ by one';
treeRoot = new BinaryTreeNode(6);
leftNode = treeRoot.insertLeft(1);
rightNode = treeRoot.insertRight(0);
rightNode.insertRight(7);
assertEquals(isBalancedIterative(treeRoot), true, desc);

desc = 'leaf heights differ by two';
treeRoot = new BinaryTreeNode(6);
leftNode = treeRoot.insertLeft(1);
rightNode = treeRoot.insertRight(0);
rightNode.insertRight(7).insertRight(8);
assertEquals(isBalancedIterative(treeRoot), false, desc);

desc = 'three leaves total';
treeRoot = new BinaryTreeNode(1);
leftNode = treeRoot.insertLeft(5);
rightNode = treeRoot.insertRight(9);
rightNode.insertLeft(8);
rightNode.insertRight(5);
assertEquals(isBalancedIterative(treeRoot), true, desc);

desc = 'both subtrees superbalanced';
treeRoot = new BinaryTreeNode(1);
leftNode = treeRoot.insertLeft(5);
rightNode = treeRoot.insertRight(9);
rightNode.insertLeft(8).insertLeft(7);
rightNode.insertRight(5);
assertEquals(isBalancedIterative(treeRoot), false, desc);

desc = 'both subtrees superbalanced two';
treeRoot = new BinaryTreeNode(1);
leftNode = treeRoot.insertLeft(2);
leftNode.insertLeft(3);
leftNode.insertRight(7).insertRight(8);
treeRoot.insertRight(4).insertRight(5).insertRight(6).insertRight(9);
assertEquals(isBalancedIterative(treeRoot), false, desc);

desc = 'three leaves at different levels';
treeRoot = new BinaryTreeNode(1);
leftNode = treeRoot.insertLeft(2);
const leftLeft = leftNode.insertLeft(3);
leftNode.insertRight(4);
leftLeft.insertLeft(5);
leftLeft.insertRight(6);
treeRoot.insertRight(7).insertRight(8).insertRight(9).insertRight(10);
assertEquals(isBalancedIterative(treeRoot), false, desc);

desc = 'only one node';
treeRoot = new BinaryTreeNode(1);
assertEquals(isBalancedIterative(treeRoot), true, desc);

desc = 'linked list tree';
treeRoot = new BinaryTreeNode(1);
treeRoot.insertRight(2).insertRight(3).insertRight(4);
assertEquals(isBalancedIterative(treeRoot), true, desc);

function assertEquals(a: boolean, b: boolean, desc: string) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
export {};
