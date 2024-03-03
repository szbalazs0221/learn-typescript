"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./CharactersCollection");
const LInkedList_1 = require("./LInkedList");
const NumbersCollection_1 = require("./NumbersCollection");
const Sorter_1 = require("./Sorter");
const numbersToSort = new NumbersCollection_1.NumbersCollection([10, 1, -5, 0, 100, -100]);
const stringToSort = new CharactersCollection_1.CharactersCollection('chjdxafksn');
const sorter = new Sorter_1.Sorter(numbersToSort);
sorter.sort();
console.log(numbersToSort.data);
const stringSorter = new Sorter_1.Sorter(stringToSort);
stringSorter.sort();
console.log(stringToSort.data);
const linkedList = new LInkedList_1.LinkedList();
const linkedListSorter = new Sorter_1.Sorter(linkedList);
linkedList.add(5);
linkedList.add(4);
linkedList.add(3);
linkedList.add(2);
linkedList.add(1);
linkedList.print();
linkedListSorter.sort();
linkedList.print();
