// A simple, somewhat inefficient queue implementation
class Queue {
  queue: string[][];
  size: number;
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  enqueue(item: string[]) {
    this.queue.unshift(item);
    this.size += 1;
  }

  dequeue() {
    this.size -= 1;
    return this.queue.pop();
  }
}

function getPath(
  graph: Record<string, string[]>,
  startNode: string,
  endNode: string
): string[] | null {
  if (!graph[endNode] || !graph[startNode]) {
    throw new Error(' MEHHHH');
  }

  if (startNode === endNode) {
    return [endNode];
  }

  // Find the shortest route in the network between the two users
  const queue = new Queue();
  let shortestPath = null;
  queue.enqueue([endNode]);

  while (queue.size) {
    const path = queue.dequeue();
    if (!path) {
      throw new Error('Path was undefined');
    }

    const lastNodeInPath = path[path.length - 1];

    graph[lastNodeInPath].every((neighbor) => {
      if (neighbor === startNode) {
        shortestPath = path.concat(neighbor).reverse();
        return false;
      }

      if (!path.includes(neighbor)) {
        // Don't move back to the node you were just at
        queue.enqueue(path.concat(neighbor));
      }
      return true;
    });
  }

  return shortestPath;
}

// Tests
const graph = {
  a: ['b', 'c', 'd'],
  b: ['a', 'd'],
  c: ['a', 'e'],
  d: ['a', 'b'],
  e: ['c'],
  f: ['g'],
  g: ['f']
};

const actual = getPath(graph, 'f', 'a');
const expected = ['a', 'c', 'e'];
console.log(actual, expected);

export {};
