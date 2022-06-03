"use strict";

/*
 * 01 easy
 * Write a JavaScript function to generate an array between two integers of 1 step length.
 * Test Data :
 * console.log(rangeBetween(4, 7));
 * [4, 5, 6, 7]
 * console.log(rangeBetween(-4, 7));
 * [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
 */
console.log(`------01------`);
const rangeBetween = function (start, end) {
  const myArray = [];
  for (let i = start; i <= end; i++) {
    myArray.push(i);
  }
  return myArray;
};

const returnedArr = rangeBetween(4, 7);
// const returnedArr = rangeBetween(-4, 7);
console.log(returnedArr);

/**
 * 02 easy medium
 * Write a JavaScript function to generate an array of specified length,
 * filled with integer numbers, increase by one from starting position.
 * console.log(arrayRange(1, 4));
 * [1, 2, 3, 4]
 * console.log(arrayRange(-6, 4));
 * [-6, -5, -4, -3]
 */
console.log(`------02-Method-1------`);
//Method-1
const arrayRange = function (start, length) {
  const myArray = [];

  for (let i = start; i < start + length; i++) {
    myArray.push(i);
  }
  return myArray;
};

const retArrayRange = arrayRange(-6, 4);
// const retArrayRange = arrayRange(1, 4);
console.log(retArrayRange);
console.log(`------02-Method-2------`);
//Method-2
function arrayRange2(start, length) {
  const array = [];
  for (let i = 0; i < length; i++, start++) {
    array[i] = start;
  }
  return array;
}

//   console.log(arrayRange2(1, 4));
console.log(arrayRange2(-6, 4));
/*
 * 03 easy medium
 * Write a JavaScript function to switch positions of one array element.
 * The function should accept the array, the current position and the new position
 * console.log(moveIt([10, 20, 30, 40, 50], 0, 2));
 * [30, 20, 10, 40, 50]
 * console.log(moveIt([10, 20, 30, 40, 50], 1, 4));
 * [10, 50, 30, 40, 20]
 */

console.log(`------03------`);
function moveIt(array, oldIdx, newIdx) {
  const oldItem = array[newIdx]; //30
  array[newIdx] = array[oldIdx];
  array[oldIdx] = oldItem;
  return array;
}
const switchedArray = moveIt([10, 20, 30, 40, 50], 0, 2);
// const switchedArray = moveIt([10, 20, 30, 40, 50], 1, 4);
console.log(switchedArray);

/*
 * 04 easy
 * Write a function that accepts a string and the number of times that this string will fill
 * and return an array
 * example fillArray('some string', 4) should return
 * ['some string', 'some string', 'some string', 'some string']
 */
console.log(`------04------`);

const fillArray = function (string, times) {
  const myArray = [];
  for (let i = 1; i <= times; i++) {
    myArray.push(string);
  }
  return myArray;
};

const retMyArr = fillArray("some string", 4);
console.log(retMyArr);

/*
 * 05 easy
 * Write a JavaScript function to get a random item from an array
 * const items = [254, 45, 212, 365, 2543];
 * console.log(randomItem(items));
 */

console.log(`------05-Method-1-Manual------`);

const items = [254, 45, 212, 365, 2543];
let result = 0;
const randomItem = function (arr, item) {
  for (let i = 0; i < arr.length; i++) {
    result = arr[item];
  }
  return result;
};

const randItem = randomItem(items, 2);
console.log(randItem);
console.log(`------05-Method-2-Random------`);
const item = [254, 45, 212, 365, 2543];

const randomItem2 = function (item) {
  return item[Math.floor(Math.random() * item.length)];
};

const randItem2 = randomItem2(item);
console.log(randItem2);

/*
 * 06 easy
 * Write a function to find if an array contains a specific element
 * checkItem([2, 5, 9, 6], 5) should return true
 * checkItem([2, 5, 9, 6], 1) should return false
 */
console.log(`------06-Method-1------`);

const checkItem = function (arr, element) {
  return arr.includes(element);
};

// const includedElement = checkItem([2, 5, 9, 6], 5);
const includedElement = checkItem([2, 5, 9, 6], 1);
console.log(includedElement);

console.log(`------06-Method-2------`);
function checkItem2(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return true;
    }
  }
  return false;
}
console.log(checkItem2([2, 5, 9, 6], 5));
console.log(checkItem2([2, 5, 9, 6], 1));
/*
 * 07 medium
 * Write a function which merges two arrays and removes all duplicates elements
 * Example:
 * array1 = [1, 2, 3];
 * array2 = [2, 30, 1];
 * mergeArrays(array1, array2) should return [3, 2, 30, 1] (the items can be with any order)
 */
console.log(`------07-Method-1------`);
const array1 = [1, 2, 3];
const array2 = [2, 30, 1];
const mergeArrays = function (arr1, arr2) {
  const myArray = [...arr1];

  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      myArray.push(arr2[i]);
    }
  }
  return myArray;
};

const mergedArrays = mergeArrays(array1, array2);
console.log(mergedArrays);

console.log(`------07-Method-2------`);
function mergeArraysEasy(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    if (!array1.includes(array2[i])) array1.push(array2[i]);
  }

  console.log(array1);
}

mergeArraysEasy([1, 2, 3], [2, 30, 1]);

/*
 * 08 medium
 * Remove all duplicates from an array of integers
 * example: with input [1,2,3,1] the function
 * should return [1,2,3]
 */
console.log(`------08------`);

const remDuplicates = function (arr) {
  const myArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!myArray.includes(arr[i])) {
      myArray.push(arr[i]);
    }
  }
  return myArray;
};

const noDuplicate = remDuplicates([1, 2, 2, 5, 3, 3, 3, 1, 4, 4, 5, 5]);
console.log(noDuplicate); /**
* 09 easy
* Create an object to hold information on your favorite recipe. 
* It should have properties for title (a string), servings (a number), 
* and ingredients (an array of strings).
* On separate lines (one console.log statement for each), 
* log the recipe information so it looks like:
Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa
*/
console.log(`------09------`);

const recipe = {
  title: "Mole",
  servings: 2,
  ingredients: ["cumin", "cinnamon", "cocoa"],
};
console.log(recipe.title);
console.log("Servings: " + recipe.servings);
console.log("Ingredients:");
for (let i = 0; i < recipe.ingredients.length; i++) {
  console.log(recipe.ingredients[i]);
}

/*
 * 10 easy
 * Create an array of objects, where each object describes a book
 * and has properties for the title (a string), author (a string),
 * and alreadyRead (a boolean indicating if you read it yet).
 * Iterate through the array of books.
 * For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
 * Now use an if/else statement to change the output depending on whether you read it yet or not.
 * If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien',
 * and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
 */

console.log(`------10------`);
const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
];

for (let i = 0; i < books.length; i++) {
  const book = books[i];
  const bookInfo = book.title + '" by ' + book.author;
  if (book.alreadyRead) {
    console.log('You already read "' + bookInfo);
  } else {
    console.log('You still need to read "' + bookInfo);
  }
}

/*
 * 11 easy
 * Write a function named helloWorld that:
 * takes 1 argument, a language code (e.g. "es", "de", "en")
 * returns "Hello, World" for the given language, for atleast 3 languages.
 * It should default to returning English.
 * Call that function for each of the supported languages and log the result to make sure it works.
 */

console.log(`------11------`);

const helloWorld = function (str) {
  if (str === "de") return `Hallo welt`;
  if (str === "fr") return `Bonjour le monde`;
  if (str === "tr") return `Selam Dünya`;
  return `English hello world`;
};

const helloToAll = helloWorld("de");
console.log(helloToAll);

/*
 * 12 easy
 * Write a function named pluralize that:
 * takes 2 arguments, a noun and a number.
 * returns the number and pluralized form, like "5 cats" or "1 dog".
 * Call that function for a few different scores and log the result to make sure it works.
 * Bonus: Make it handle a few collective nouns like "sheep" and "geese".
 *
 * example: pluralize('cat', 2) should return 2 cats
 */

console.log(`------12------`);
const pluralize = function (noun, number) {
  if (noun === "sheep" || noun === "geese") {
    return number + " " + noun;
  }
  if (number > 1) {
    return number + " " + noun + "s";
  } else {
    return number + " " + noun;
  }
};

const revPluralize = pluralize("cat", 2);
console.log(revPluralize);
