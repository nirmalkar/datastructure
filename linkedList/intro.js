// linked list : each node pointing to next node
class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

const first = new Node("hello")
// console.log(first);
first.next = new Node("world")
// console.log(first);

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0 
    }
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }else{
            this.head.next = newNode
            this.tail = newNode
        }
        this.length++;
        return this
    }
}

const list = new SinglyLinkedList()
console.log(list);
list.push(1)
console.log(list);
list.push("hi")
console.log(list);