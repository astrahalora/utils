// piece of data - val
// reference to the next node
// good for insertions/deletions at the beginning
// not so good when accessing data

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = null;
        this.tail = null;
        this.length = 0;
    }

    // O(1)
    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    traverse() {
        let current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;
        }
    }

    // O(n)
    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // O(1)
    shift() {
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentHead;
    }

    // O(1)
    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // O(n)
    get(index) {
        if(index < 0 || index >= this.length) return null;
        let count = 0;
        let current = this.head;
        while(count !== index) {
            current = current.next;
            count++;
        }
        return current;
    }

    // O(n)
    set(index, val) {
        let foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    // O(n)
    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        let newNode = new Node(val);
        let previous = this.get(index - 1);
        let temp = previous.next;
        previous.next = newNode;
        newNode.next = temp;this.length++;
        return true;
    }

    // O(n)
    remove(index) {
        if(index < 0 || index > this.length) return undefined;
        if(index === this.length-1) return this.pop();
        if(index === 0) return this.shift();
        let prevNode = this.get(index-1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }

    // O(n)
    print() {
        const arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        return console.log(arr);
    }

    // O(n)
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let previous = null;
        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = previous;
            previous = node;
            node = next;
        }
        return this;
    }
}

const firstList = new SinglyLinkedList();
firstList.push("La La LA");
firstList.push("CHa cha CHa");
firstList.push("Da ba da");

firstList.insert(1, "Bi bum Ba");
firstList.unshift("Baaaaaa");
firstList.remove(0);
console.log(firstList.get(1))
firstList.set(1, "Bi Bum Ga")
firstList.print();
