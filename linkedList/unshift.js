import { Node, SinglyLinkedList } from "./intro.js";

SinglyLinkedList.prototype.unShift = function (val) {
    const newNode = new Node(val);
    if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length++;
    return this;
};

const unshiftList = new SinglyLinkedList();

unshiftList.unShift(2);
unshiftList.unShift(3);
unshiftList.unShift(4);
unshiftList.unShift(5);
console.log("Unshifted four numbers ", unshiftList);
