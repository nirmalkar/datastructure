/**
 * A Graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as
 * vertices and the edges are lines or arcs that connect any two nodes in the graph.
 */

/**
 * Graph is basically divided into two broad categories :
 * Directed Graph (Di- graph) – Where edges have direction
 * Undirected Graph – Where edges do not represent any directed
 * There are various ways to represent a Graph:-
 * 1. Adjacency Matrix
 * 2. Adjacency List
 */

export class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1]?.push(v2);
        this.adjacencyList[v2]?.push(v1);
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1]?.splice(this.adjacencyList[v1].indexOf(v2), 1);
        this.adjacencyList[v2]?.splice(this.adjacencyList[v2].indexOf(v1), 1);
        // this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
        // this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
    }
    removeVertex(vertexToBeRemoved) {
        this.adjacencyList[vertexToBeRemoved]?.forEach((e) => {
            this.removeEdge(vertexToBeRemoved, e);
        });
        delete this.adjacencyList[vertexToBeRemoved];
    }
}
console.log(Math);

const g = new Graph();
g.addVertex("India");
g.addVertex("Pakistan");
g.addVertex("China");
g.addVertex("USA");
g.addVertex("Canada");
g.addEdge("India", "Canada");
g.addEdge("Pakistan", "Canada");
g.addEdge("India", "USA");
g.addEdge("Pakistan", "USA");
g.addEdge("Canada", "USA");
g.addEdge("China", "Pakistan");
g.addEdge("China", "Canada");
console.log(g);
g.removeEdge("Canada", "Pakistan");
console.log(g);
g.removeVertex("Pakistan");
console.log("Graph at first", g);
