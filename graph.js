class Node {
	constructor (value, adjacent = new Set()) {
		this.value = value;
		this.adjacent = adjacent;
	}
}

class Graph {
	constructor () {
		this.nodes = new Set();
	}

	// this function accepts a Node instance and adds it to the nodes property on the graph
	addVertex (vertex) {
		this.nodes.add(vertex);
	}

	// this function accepts an array of Node instances and adds them to the nodes property on the graph
	addVertices (vertexArray) {
		for (let node of vertexArray) {
			this.addVertex(node);
		}
	}

	// this function accepts two vertices and updates their adjacent values to include the other vertex
	addEdge (v1, v2) {
		v1.adjacent.add(v2);
		v2.adjacent.add(v1);
	}
}

module.exports = { Graph, Node };
