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

function findSecondLargest(treeRoot: BinaryTreeNode): number | null {
  // Find the second largest item in the binary search tree
  const stack: BinaryTreeNode[] = [treeRoot];
  let parentVal: number | null = null;

  while (stack.length) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const node = stack.pop();
    if (!node) {
      return null;
    }

    if (node.right) {
      stack.push(node.right);
      parentVal = node.value;
    } else {
      if (!node.left) {
        if (!parentVal) {
          throw new Error('Hmmmm empty node yall');
        }
        return Math.min(parentVal, node.value);
      } else {
        stack.push(node.left);
        parentVal = node.value;
      }
    }
  }

  return null;
}

const desc = 'largest has a left child';
const treeRoot = new BinaryTreeNode(50);
const leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
const rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
console.log(findSecondLargest(treeRoot), 60, desc);

export {};
