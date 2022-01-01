BinarySearchTree.prototype.DFSPostOrder = function () {
    let root = this.root;
    const data = [];
    function postOrder(root) {
        if (root.left) postOrder(root.left);
        if (root.right) postOrder(root.right);
        data.push(root.value);
    }
    postOrder(root);
    return data;
};

const newDFSPostOrderTree = new BinarySearchTree();
newDFSPostOrderTree.insert(10);
newDFSPostOrderTree.insert(6);
newDFSPostOrderTree.insert(15);
newDFSPostOrderTree.insert(3);
newDFSPostOrderTree.insert(8);
newDFSPostOrderTree.insert(20);
console.log(newDFSPostOrderTree);
console.log(newDFSPostOrderTree.DFSPostOrder());
