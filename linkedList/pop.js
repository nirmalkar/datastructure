import { Node, SinglyLinkedList } from './intro.js';

SinglyLinkedList.prototype.pop = function () {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
        newTail = current;
        current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
        this.head = null;
        this.tail = null;
    }
    return current;
};

const popList = new SinglyLinkedList();
console.log(popList);
popList.push('How');
popList.push('are');
popList.push('you');
popList.push('?');
popList.pop();
popList.pop();
console.log('After popping out two items', popList);
