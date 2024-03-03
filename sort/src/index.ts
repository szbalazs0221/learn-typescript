import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LInkedList';
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

const linkedList = new LinkedList();
const linkedListSorter = new Sorter(linkedList);
linkedList.add(5);
linkedList.add(4);
linkedList.add(3);
linkedList.add(2);
linkedList.add(1);
linkedList.print();
linkedListSorter.sort();
linkedList.print();
