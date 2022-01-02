BinarySearchTree.prototype.DFSInOrder = function () {
    let root = this.root;
    const data = [];
    function DFSInOrderFunc(root) {
        if (root.left) DFSInOrderFunc(root.left);
        data.push(root.value);
        if (root.right) DFSInOrderFunc(root.right);
    }
    DFSInOrderFunc(root);
    return data;
};

const DFSInOrderTree = new BinarySearchTree();
DFSInOrderTree.insert(10);
DFSInOrderTree.insert(6);
DFSInOrderTree.insert(15);
DFSInOrderTree.insert(3);
DFSInOrderTree.insert(8);
DFSInOrderTree.insert(20);
console.log(DFSInOrderTree);
console.log(DFSInOrderTree.DFSInOrder());
