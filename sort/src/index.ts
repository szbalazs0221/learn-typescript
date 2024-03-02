import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersToSort = new NumbersCollection([10, 1, -5, 0, 100, -100]);
const stringToSort = new CharactersCollection('chjdxafksn');
const sorter = new Sorter(numbersToSort);
sorter.sort();
console.log(numbersToSort.data);

const stringSorter = new Sorter(stringToSort);
stringSorter.sort();
console.log(stringToSort.data);
