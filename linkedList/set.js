import { SinglyLinkedList } from "./intro.js";

SinglyLinkedList.prototype.set = function (idx, val) {
    const node = this.get(idx);
    if (node) {
        node.val = val;
        return true;
    }
    return false;
};

const setList = new SinglyLinkedList();

setList.push(2);
setList.push(4);
setList.push(5);
setList.push(7);

const a = setList.set(2, "hello");
const b = setList.set(3, "world");
const c = setList.set(5, "return false");
console.log(setList);
console.log(a, b, c);
