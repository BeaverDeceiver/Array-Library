// import { ArrayLibrary } from "./indexES5";
const ArrayLibrary = require("./indexES5").ArrayLibrary;

let lib = new ArrayLibrary([1, 2, 5, 6, 7, 8, 9, 3, 4]);

let arr = [1, 2, 3, 4, 5, 6];

// initial array
console.log(arr);

// take example
console.log(lib.take(arr, 2));

// skip example
console.log(lib.skip(arr, 3));

// map example
console.log(lib.map(arr, (item) => item * 2));

// reduce example
console.log(lib.reduce(arr, (sum, current) => sum + current * 2, 0));

// filter example
console.log(lib.filter(arr, (item) => item % 2 == 1));

// foreach example
lib.foreach(arr, (item) => console.log(item + 0.2));

// chain & value example
console.log(lib.chain([1, 2, 3, 4, 9, 11]).take(2).skip(1).value());
