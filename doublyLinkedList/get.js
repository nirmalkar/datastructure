import { DoublyLinkedList } from "./setup.js";

DoublyLinkedList.prototype.get = function (i) {
    if (this.length === 0 || i > this.length - 1 || i < 0) return null;
    let count = 0;
    let currentNode = this.head;
    //un-optimized
    while (count !== i) {
        currentNode = currentNode.next;
        count++;
    }
    return currentNode;
};

const getList = new DoublyLinkedList();

getList.push(1);
getList.push(2);
getList.push(34);
getList.push(15);

console.log(getList);
console.log(getList.get(1));
console.log(getList.get(2));
console.log(getList.get(-1));
