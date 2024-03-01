let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) function returns the any type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) delayed initialization
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (const word of words) {
  if (word === 'green') {
    foundWord = true;
  }
}

// 3) when inference does not work
let numbers = [-10, -1, 12];
let numberAboveZero: number | boolean = false;

for (const number of numbers) {
  if (number > 0) {
    numberAboveZero = number;
  } else {
    numberAboveZero = false;
  }
}
