// linked list : each node pointing to next node
export class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

export class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}
