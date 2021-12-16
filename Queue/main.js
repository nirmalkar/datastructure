class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue() {
        const temp = this.first;
        if (!this.first) return null;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp;
    }
}

const queueList = new Queue();
queueList.enqueue(1);
queueList.enqueue(2);
queueList.enqueue(3);
queueList.enqueue(4);

console.log(queueList);
queueList.dequeue();
console.log(queueList);
