const { Node, Graph } = require('./graph-depth-first'); 

describe('Graph depthFirst method', () => {
  it('traverse the graph in pre-order depth-first order', () => {
    // Create a sample graph
    const graph = new Graph();

    const A = new Node('A');
    const B = new Node('B');
    const C = new Node('C');
    const D = new Node('D');
    const E = new Node('E');
    const F = new Node('F');
    const G = new Node('G');
    const H = new Node('H');

    A.children.push(B, C, G);
    B.children.push(D, E);
    C.children.push(F);
    G.children.push(H);

    graph.nodes.push(A, B, C, D, E, F, G, H);

    const visitedNodes = graph.depthFirst(A); // Capture the result here
    const expectedResult = ['A', 'B', 'D', 'E', 'C', 'F', 'G', 'H'];
    
    expect(visitedNodes).toEqual(expectedResult);
  });
});