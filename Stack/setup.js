class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = null;
    }
    push(val) {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop() {
        const temp = this.first;
        if (!this.first) return null;
        if (this.first === this.last) {
            this.first = null;
            this.last = null;
            return temp.val;
        } else {
            this.first = temp.next;
            this.size--;
            return temp.val;
        }
    }
}

const stackList = new Stack();
stackList.push(1);
stackList.push(2);
stackList.push(3);
console.log(stackList);
