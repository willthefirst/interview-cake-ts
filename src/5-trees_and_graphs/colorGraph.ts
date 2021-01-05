class GraphNode {
  label: string;
  neighbors: Set<GraphNode>;
  color: number | null;
  constructor(label: string) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
  }
}

const a = new GraphNode('a');
const b = new GraphNode('b');
const c = new GraphNode('c');
const d = new GraphNode('d');

a.neighbors.add(b);
a.neighbors.add(c);
a.neighbors.add(d);
b.neighbors.add(a);
b.neighbors.add(c);
c.neighbors.add(a);
c.neighbors.add(b);
c.neighbors.add(d);
d.neighbors.add(a);
d.neighbors.add(c);

const graph = [a, b, c, d];
// D = 3, so we get 4 colors.
const colors = new Set([0, 1, 2, 3]);

function colorGraph(graph: GraphNode[], colors: Set<number>): GraphNode[] {
  // Create a valid coloring for the graph
  let numColored = 0;

  while (numColored < graph.length) {
    graph.forEach((node) => {
      if (node.neighbors.has(node)) {
        throw new Error(
          `Legal coloring impossible for node with loop: ${node.label}`
        );
      }

      const colorOptions: Set<number | null> = new Set(colors);

      for (const n of node.neighbors) {
        colorOptions.delete(n.color);
      }

      const colorOption = colorOptions.values().next().value;

      if (colorOption !== null) {
        node.color = colorOption;
        numColored++;
      }
    });
  }

  return graph;
}

console.log(colorGraph(graph, colors));
