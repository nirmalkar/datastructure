import { Node, SinglyLinkedList } from "./intro.js";

SinglyLinkedList.prototype.push = function (val) {
  let newNode = new Node(val);
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

const pushList = new SinglyLinkedList();
console.log("Before pushing!", pushList);
pushList.push(1);
pushList.push("Hi");
pushList.push("There");
pushList.push("How");
pushList.push("are");
pushList.push("you");
pushList.push("?");
console.log("After Pushing things!", pushList);

export default SinglyLinkedList;
