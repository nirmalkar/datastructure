//In Binary search tree each node has maximum two children, left one should be less than right one.

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
        if (!value) return this;
        if (value === this.root?.value) return this;
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let root = this.root;
            const newNode = new Node(value);
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
