"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const Sorter_1 = require("./Sorter");
const numbersToSort = new NumbersCollection_1.NumbersCollection([10, 1, -5, 0, 100, -100]);
const sorter = new Sorter_1.Sorter(numbersToSort);
sorter.sort();
console.log(numbersToSort.data);
