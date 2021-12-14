import { SinglyLinkedList } from "./intro.js";

SinglyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.length) return undefined;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
        current = current.next;
        counter++;
    }
    return current;
};

const getList = new SinglyLinkedList();
getList.push(23);
getList.push("Hello");
getList.push("World");
getList.push("!");

const valOne = getList.get(2);
console.log(valOne);
