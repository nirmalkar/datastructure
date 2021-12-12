import { Node, DoublyLinkedList } from "./setup.js";

DoublyLinkedList.prototype.unShift = function (val) {
    const newNode = new Node(val);
    if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    } else {
        const temp = this.head;
        temp.prev = newNode;
        newNode.next = temp;
        this.head = newNode;
        this.length++;
        return newNode;
    }
};

const unShiftList = new DoublyLinkedList();

unShiftList.push(1);
unShiftList.push(2);
unShiftList.push(3);
unShiftList.push("Hello world!!");
console.log(unShiftList);
unShiftList.unShift(4);
console.log(unShiftList);
