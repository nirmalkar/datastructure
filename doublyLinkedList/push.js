import { Node, DoublyLinkedList } from "./setup.js";

DoublyLinkedList.prototype.push = function (val) {
    const newNode = new Node(val);
    if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }
    this.length++;
    return this;
};

const newList = new DoublyLinkedList();

newList.push(2);
newList.push(3);
newList.push(4);
newList.push("Last Node");
console.log(newList);
