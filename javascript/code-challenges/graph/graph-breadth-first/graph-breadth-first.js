function breadthFirst(vertex) {
    const nodes = [];
    const breadth = [];
    const visited = new Set();
  
    breadth.push(vertex);
    visited.add(vertex);
  
    while (breadth.length > 0) {
      const front = breadth.shift();
      nodes.push(front);
  
      for (const child of front.children) {
        if (!visited.has(child)) {
          visited.add(child);
          breadth.push(child);
        }
      }
    }
  
    return nodes;
  }