import { Node, SinglyLinkedList } from "./intro.js";

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
  return current;
};

const list = new SinglyLinkedList();
list.push("How");
list.push("are");
list.push("you");
list.push("?");

list.pop();
list.pop();
console.log(list);