/**
 *
 *
 */

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
newDFSPreOrderTree.insert(10);
newDFSPreOrderTree.insert(6);
newDFSPreOrderTree.insert(15);
newDFSPreOrderTree.insert(3);
newDFSPreOrderTree.insert(8);
newDFSPreOrderTree.insert(20);
console.log(newDFSPreOrderTree.DFSPreOrder());
