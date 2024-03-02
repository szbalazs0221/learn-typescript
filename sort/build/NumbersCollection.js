"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex) {
        return this.data[leftIndex] > this.data[leftIndex + 1];
    }
    swap(leftIndex) {
        let temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[leftIndex + 1];
        this.data[leftIndex + 1] = temp;
    }
}
exports.NumbersCollection = NumbersCollection;
