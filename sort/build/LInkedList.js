"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    get length() {
        if (!this.head) {
            return 0;
        }
        let counter = 1;
        let node = this.head;
        while (node.next) {
            node = node.next;
            counter++;
        }
        return counter;
    }
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    at(index) {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }
        let node = this.head;
        let counter = 0;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    }
    compare(leftIndex) {
        if (!this.head) {
            throw new Error('List is empty');
        }
        return this.at(leftIndex).data > this.at(leftIndex + 1).data;
    }
    swap(leftIndex) {
        if (!this.head) {
            throw new Error('List is empty');
        }
        const tempValue = this.at(leftIndex).data;
        this.at(leftIndex).data = this.at(leftIndex + 1).data;
        this.at(leftIndex + 1).data = tempValue;
    }
    print() {
        if (!this.head) {
            return;
        }
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
