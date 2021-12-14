import { Node, SinglyLinkedList } from "./intro.js";

SinglyLinkedList.prototype.insert = function (idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return this.push(val);
    if (idx === 0) return this.unShift(val);
    let newNode = new Node(val);
    const prevNode = this.get(idx - 1);
    const temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    return true;
};

const insertList = new SinglyLinkedList();
insertList.push(1);
insertList.push(2);
console.log(insertList.insert(0, "How")); // true
console.log(insertList.insert(4, "are")); // false
console.log(insertList);
