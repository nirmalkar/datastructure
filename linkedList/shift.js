import { Node, SinglyLinkedList } from "./intro.js";

SinglyLinkedList.prototype.shift = function () {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
        this.head = null;
        this.tail = null;
    }
    return current;
};

const shiftList = new SinglyLinkedList();
shiftList.push("How");
shiftList.push("are");
shiftList.push("you");
shiftList.push("?");

const a = shiftList.shift();
const b = shiftList.shift();
const c = shiftList.shift();

console.log("Shifted items", a, b, c);
console.log("After shift", shiftList);
