// import { ArrayLibrary } from "./indexES5";
const ArrayLibraryES5 = require("./indexES5").ArrayLibrary;
const ArrayLibraryES6 = require("./indexES6").ArrayLibrary;

let libES5 = new ArrayLibraryES5([1, 2, 5, 6, 7, 8, 9, 3, 4]);

let arr = [1, 2, 3, 4, 5, 6];

// ES5 type

// initial array
console.log(arr);

// take example
console.log(`take [es5]: ${libES5.take(arr, 2)}`);

// skip example
console.log(`skip [es5]: ${libES5.skip(arr, 3)}`);

// map example
console.log(`map [es5]: ${libES5.map(arr, (item) => item * 2)}`);

// reduce example
console.log(
  `reduce [es5]: ${libES5.reduce(arr, (sum, current) => sum + current * 2, 0)}`
);

// filter example
console.log(`filter [es5]: ${libES5.filter(arr, (item) => item % 2 == 1)}`);

// foreach example
console.log(`foreach [es5]:`);
libES5.foreach(arr, (item) => console.log(item + 0.2));

// chain & value example
console.log(`chain [es5]:`);
console.log(libES5.chain([1, 2, 3, 4, 9, 11]).take(4).skip(1).value());

// ES6 type

let libES6 = new ArrayLibraryES6();

console.log("--------------------------------");

arr = [-1, -2, -3, -4, -5, -6, -7];

console.log(arr);

// take example
console.log(`take [es6]: ${libES6.take(arr, 2)}`);

// skip example
console.log(`skip [es6]: ${libES6.skip(arr, 3)}`);

// map example
console.log(`map [es6]: ${libES6.map(arr, (item) => item * 2)}`);

// reduce example
console.log(
  `reduce [es6]: ${libES6.reduce(arr, (sum, current) => sum + current * 2, 0)}`
);

// filter example
console.log(`filter [es6]: ${libES6.filter(arr, (item) => item % 2 == -1)}`);

// foreach example
console.log(`foreach [es6]:`);
libES6.foreach(arr, (item) => console.log(item + 0.2));

// chain & value example
console.log(`chain [es6]:`);
console.log(
  libES6
    .chain(arr)
    .take(6)
    .skip(1)
    .filter((item) => item < -3)
    .reduce((res, item) => (res *= item), 1)
    .value()
);
