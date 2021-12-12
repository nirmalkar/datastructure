import { DoublyLinkedList } from "./setup.js";

DoublyLinkedList.prototype.pop = function () {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
        const temp = this.head;
        this.head = null;
        this.tail = null;
        return temp;
    } else {
        const temp = this.tail;
        this.tail = temp.prev;
        this.tail.next = null;

        this.length--;
        temp.prev = null;
        return temp;
    }
};

const popList = new DoublyLinkedList();

popList.push("Hello world!!");
popList.push(1);
popList.push(2);
popList.push(3);
console.log(popList);
popList.pop();
console.log(popList);
