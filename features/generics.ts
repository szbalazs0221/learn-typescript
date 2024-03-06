class ArrayOfNumber {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: string): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(['a', 'b', 'c']);

// Example of generics with functions

function printStrings(arr: string[]): void {
  for (const value of arr) {
    console.log(value);
  }
}

function printNumbers(arr: number[]): void {
  for (const value of arr) {
    console.log(value);
  }
}

function printAnything<T>(arr: T[]): void {
  for (const value of arr) {
    console.log(value);
  }
}

printAnything<string>(['a', 'b', 'c']);

// Generic constraints

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (const value of arr) {
    value.print();
  }
}
