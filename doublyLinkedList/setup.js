export class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

export class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}
