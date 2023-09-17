class Node {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  }
  
  class Graph {
    constructor() {
      this.nodes = [];
    }
  
    depthFirst(node) {
      const visited = [];
      this.depthFirstRecursive(node, visited);
      return visited; // Return the visited nodes
    }
  
    depthFirstRecursive(node, visited) {
      visited.push(node.value);
      for (const child of node.children) {
        if (!visited.includes(child.value)) {
          this.depthFirstRecursive(child, visited);
        }
      }
    }
  }
  
  module.exports = { Node, Graph };