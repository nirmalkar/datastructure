import { Node, SinglyLinkedList } from "./intro.js";

SinglyLinkedList.prototype.remove = function (idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    let previousNode = this.get(idx - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
};

const removeList = new SinglyLinkedList();
removeList.push(1);
removeList.push("How");
removeList.push("are");
removeList.push("you");
removeList.push("are");
console.log(removeList.remove(1));
console.log(removeList.remove(0));
console.log(removeList);
