"use strict";
const Vertex = require("./vertex");
const Edge = require("./edge");
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }
  addDirectedEdge(start, end, weight) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      console.log(`vertex does not exist`);
      return;
    } else {
      const adjacencies = this.adjacencyList.get(start);
      let edge = new Edge(end, weight);
      adjacencies.push(edge);
    }
  }
  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      console.log(`Vertex does not exist`);
      return [];
    }

    return this.adjacencyList.get(vertex);
  }

  size() {
    return this.adjacencyList.size;
  }
  
}
