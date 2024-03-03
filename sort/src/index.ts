import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LInkedList';
import { NumbersCollection } from './NumbersCollection';

const numbersToSort = new NumbersCollection([10, 1, -5, 0, 100, -100]);
numbersToSort.sort();
console.log(numbersToSort.data);

const stringToSort = new CharactersCollection('chjdxZafksn');
stringToSort.sort();
console.log(stringToSort.data);

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(4);
linkedList.add(3);
linkedList.add(2);
linkedList.add(1);
linkedList.sort();
linkedList.print();
