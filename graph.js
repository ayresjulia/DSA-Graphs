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
}

module.exports = { Graph, Node };
