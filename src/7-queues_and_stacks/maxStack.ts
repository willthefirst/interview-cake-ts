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

// Implement the push, pop, and getMax methods
class MaxStack {
  items: Stack;
  maxes: Stack;

  constructor() {
    this.items = new Stack();
    this.maxes = new Stack();
  }

  push(item: number) {
    const lastMax = this.maxes.peek();

    if (lastMax === null) {
      this.maxes.push(item);
    } else if (item >= lastMax) {
      this.maxes.push(item);
    }

    this.items.push(item);
  }

  pop() {
    const item = this.items.pop();
    const lastMax = this.maxes.peek();

    if (item === lastMax) {
      this.maxes.pop();
    }
    return item;
  }

  getMax() {
    return this.maxes.peek();
  }
}
