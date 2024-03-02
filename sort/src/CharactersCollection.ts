import { Sortable } from './Sorter';

export class CharactersCollection implements Sortable {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number): boolean {
    return (
      this.data[leftIndex].toLocaleLowerCase() >
      this.data[leftIndex + 1].toLocaleLowerCase()
    );
  }

  swap(leftIndex: number): void {
    const characters = this.data.split('');
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[leftIndex + 1];
    characters[leftIndex + 1] = leftHand;
    this.data = characters.join('');
  }
}
