import { Node, SinglyLinkedList } from "./intro.js";

SinglyLinkedList.prototype.push = function (val) {
  let newNode = new Node(val);
  console.log("this is node", newNode);
  if (!this.head) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.length++;
  return this;
};

const list = new SinglyLinkedList();
list.push(1);
list.push("Hi");
list.push("There");
list.push("How");
list.push("are");
list.push("you");
list.push("?");
console.log(list);

export default SinglyLinkedList;
