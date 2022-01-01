/**
 * A tree is a collection of nodes connected by some edges.
 * A tree is a non linear data structure.
 * A Binary Search tree is a binary tree in which nodes that have lesser value are stored
 * on the left while the nodes with a higher value are stored at the right. (source geeks for geeks)
 */

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        if (value === this.root?.value) return this;
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let root = this.root;
            while (true) {
                if (root.value < value) {
                    if (root.right === null) {
                        root.right = newNode;
                        return this;
                    } else {
                        root = root.right;
                    }
                } else {
                    if (root.left === null) {
                        root.left = newNode;
                        return this;
                    } else {
                        root = root.left;
                    }
                }
            }
        }
    }
}

const newTree = new BinarySearchTree();
newTree.insert(2);
console.log(newTree);
