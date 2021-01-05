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

function isBalancedIterative(treeRoot: BinaryTreeNode) {
  const depths = Array.from(new Set(findLeafDepths(treeRoot, 0)));
  const diff = Math.abs(depths.reduce((acc, curr) => acc - curr));
  return depths.length <= 1 || (depths.length <= 2 && diff <= 1);
}

const findLeafDepths = (
  treeRoot: BinaryTreeNode | null,
  depth: number
): number[] => {
  // Base cases
  if (treeRoot === null) {
    return [];
  }

  if (!treeRoot.left && !treeRoot.right) {
    // It's a leaf
    return [depth];
  } else {
    // It's a root (with leaves)
    return [
      ...findLeafDepths(treeRoot.left, depth + 1),
      findLeafDepths(treeRoot.right, depth + 1)
    ].flat();
  }
};

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
