import { DoublyLinkedList } from "./setup.js";

DoublyLinkedList.prototype.shift = function () {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length--;
        return this.head;
    } else {
        const temp = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        temp.next = null;
        this.length--;
        return temp;
    }
};

const shiftList = new DoublyLinkedList();
shiftList.push("How are u?");
shiftList.push("where are you from?");
shiftList.push("How is it going?");
shiftList.push(1);
shiftList.push(2);
shiftList.push(3);
console.log(shiftList);
console.log(shiftList.shift());
console.log(shiftList);
