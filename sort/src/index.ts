import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersToSort = new NumbersCollection([10, 1, -5, 0, 100, -100]);
const sorter = new Sorter(numbersToSort);
sorter.sort();
console.log(numbersToSort.data);
