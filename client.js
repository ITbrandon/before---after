//Number
let beforeNumberVariable = document.querySelector('#before-number-value');
const numberVariable = document.querySelector('#number-value');

let initialNumber = 5.125456;

beforeNumberVariable.textContent = initialNumber

// Incrementing Number By 1
initialNumber++;

// Setting Number to Only two decimals
let fixedNumber = initialNumber.toFixed(2);

// Turning Number into a String
fixedNumber.toString();

numberVariable.textContent = fixedNumber;

//String
let beforeStringVariable = document.querySelector('#before-string-value');
const stringVariable = document.querySelector('#string-value');

let initialString = 'Hello, World';

beforeStringVariable.textContent = initialString;

// Replacing Initial String Value to Another Value
let newString = initialString.replace('World', 'People');

// taking off the string values from position 0-6 
const finalString = newString.slice(7);

stringVariable.textContent = finalString;

//Array
let beforeArrayVariable = document.querySelector('#before-array-value');
const arrayVariable = document.querySelector('#array-value');

const initialArray = [1, 2, 3, 4, 5];

beforeArrayVariable.textContent = initialArray;

// Pushing the Number 6 into the Array
initialArray.push(6);

// Removing the value at position 0 of the array
initialArray.shift();

arrayVariable.textContent = initialArray;

//Object
let beforeObjectVariable = document.querySelector('#before-object-value');
const objectVariable = document.querySelector('#object-value');

let initialObject = { name: "Brandon", age: 21 };

beforeObjectVariable.textContent = Object.values(initialObject);

//Changing a the value for the name key
initialObject.name = "Boston";

//adding a new key value pair
initialObject.favoriteFood = "Pizza";

//removing a key value pair
delete initialObject.age;

objectVariable.textContent = Object.values(initialObject);
