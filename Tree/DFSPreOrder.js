BinarySearchTree.prototype.DFSPreOrder = function () {
    const data = [];
    function DFSPreOrderFunc(root) {
        data.push(root.value);
        if (root.left) DFSPreOrderFunc(root.left);
        if (root.right) DFSPreOrderFunc(root.right);
        return data;
    }
    return DFSPreOrderFunc(this.root);
};

const newDFSPreOrderTree = new BinarySearchTree();
newDFSPreOrderTree.insert(12);
newDFSPreOrderTree.insert(6);
newDFSPreOrderTree.insert(4);
newDFSPreOrderTree.insert(8);
newDFSPreOrderTree.insert(15);
newDFSPreOrderTree.insert(14);
newDFSPreOrderTree.insert(16);
newDFSPreOrderTree.insert(13);
console.log(newDFSPreOrderTree.DFSPreOrder());
