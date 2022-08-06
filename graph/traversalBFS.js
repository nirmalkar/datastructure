import { Graph } from "./index.js";
Graph.prototype.breadthFirstSearch = function () {};

const tBFS = new Graph();

tBFS.addVertex("A");
tBFS.addVertex("B");
tBFS.addVertex("C");
tBFS.addVertex("D");
tBFS.addVertex("E");
tBFS.addVertex("F");

tBFS.addEdge("A", "B");
tBFS.addEdge("A", "C");
tBFS.addEdge("B", "D");
tBFS.addEdge("C", "E");
tBFS.addEdge("D", "E");
tBFS.addEdge("D", "F");
tBFS.addEdge("E", "F");
console.log("BFS Traversal ==>", tBFS);
