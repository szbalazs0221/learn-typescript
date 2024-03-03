import { NumbersCollection } from './NumbersCollection';

export interface Sortable {
  length: number;
  compare(leftIndex: number): boolean;
  swap(leftIndex: number): void;
}

export abstract class Sorter implements Sortable {
  abstract compare(leftIndex: number): boolean;
  abstract swap(leftIndex: number): void;
  abstract get length(): number;

  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j)) {
          this.swap(j);
        }
      }
    }
  }
}
