import { Graph } from "./index.js";
Graph.prototype.depthFirstRecursive = function (start) {
    const adjacencyList = this.adjacencyList;
    if (!adjacencyList[start]) return "Vertex not present in the graph";
    const result = [];
    const visited = {};
    (function bfs(vertex) {
        result.push(vertex);
        visited[vertex] = true;
        adjacencyList[vertex].forEach((neighbor) => {
            if (!visited[neighbor]) {
                return bfs(neighbor);
            }
        });
    })(start);
    return result;
};
let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
const a = g.depthFirstRecursive("E");
console.log(a);
