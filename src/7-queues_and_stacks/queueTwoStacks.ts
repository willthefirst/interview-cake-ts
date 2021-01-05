// THIS CAN BE SIMPLIFIED

class Stack {
  items: number[];
  constructor() {
    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item: number) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {
    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Return the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

//  Implement the enqueue and dequeue methods

class QueueTwoStacks {
  stacks: Stack[];
  orderedStackPointer: number; // 0 or 1

  constructor() {
    this.stacks = [new Stack(), new Stack()];
    this.orderedStackPointer = 0;
  }

  // Pushes to the end
  enqueue(item: number) {
    const orderedStack: Stack = this.stacks[this.orderedStackPointer];
    const otherStackPointer: number = -1 * this.orderedStackPointer + 1;
    const otherStack = this.stacks[otherStackPointer];

    const first = orderedStack.pop();

    if (first === null) {
      orderedStack.push(item);
      return;
    }

    otherStack.push(first!);
    orderedStack.push(item);
    this.orderedStackPointer = otherStackPointer;
  }

  // Removes from the beginning
  dequeue() {
    const orderedStack: Stack = this.stacks[this.orderedStackPointer];
    const item = orderedStack.pop();

    if (!item) {
      throw new Error('Error!');
    }

    if (orderedStack.peek() === null) {
      this.orderedStackPointer = -1 * this.orderedStackPointer + 1;
    }

    return item;
  }
}

export {};
const q = new QueueTwoStacks();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

let desc = 'dequeue #1';
let actual = q.dequeue();
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'dequeue #2';
actual = q.dequeue();
expected = 2;
assertEquals(actual, expected, desc);

q.enqueue(4);

desc = 'dequeue #3';
actual = q.dequeue();
expected = 3;
assertEquals(actual, expected, desc);

desc = 'dequeue #4';
actual = q.dequeue();
expected = 4;
assertEquals(actual, expected, desc);

desc = 'dequeue from empty queue';
const emptyDequeue = () => q.dequeue();
assertThrowsError(emptyDequeue, desc);

function assertEquals(a: number | null | undefined, b: number, desc: string) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrowsError(
  func: { (): number | null | undefined; (): void },
  desc: string
) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}
